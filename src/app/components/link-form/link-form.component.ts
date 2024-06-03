// import { Component } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-link-form',
//   templateUrl: './link-form.component.html',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     FormsModule
//   ]
// })
// export class LinkFormComponent {

//   constructor(public dialogRef: MatDialogRef<LinkFormComponent>) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Link } from '../../models/link';
import { DebuglinkService } from '../../service/debuglink.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule]
})
export class LinkFormComponent {
  
  linkValidator: FormGroup;
  link= new Link("","","",[]);

  constructor(private router: Router,private formBuilder: FormBuilder, private service: DebuglinkService, private toast: ToastrService){
    this.linkValidator=this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      
      link: ['', Validators.required],
      category: ['', Validators.required],
      hashtags: ['', Validators.required],
    });
  }
  
  @Output() formClosed = new EventEmitter<void>();

  closeForm() {
    this.formClosed.emit();
  }
  createLink(){
    if (this.linkValidator.valid) {
      // formulaire valide
      //link prend la valeur du contenue du formulaire
      this.link=this.linkValidator.value;
      //separation des elements de hastags pour former un tableau
      var hashtags= this.linkValidator.value["hashtags"].split(" ");
      //on update link avec le tableau de hashtag. 
      this.link.hashtags=hashtags;
      //appelle du service d'insertion de lien
      
      this.service.insertLink(this.link).subscribe((res: any)=>{
        if(res.success){

       
          this.closeForm();
           this.toast.success("lien creer avec succes")
          //rafraichir la page apres inserrtion
          this.router.navigate(['/main']).then(() => {
            window.location.reload();
          });

        }
        else{
          
           this.toast.error("erreur lors de l'insertion")
           
          }
          
        });
      } else {
        // Gérer les cas d'erreur ou les champs non valides
        this.toast.error("Le formulaire n'est pas valide.")
     }
  }
}
