import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DebuglinkService } from '../../service/debuglink.service'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent {
  imageUrl: string | ArrayBuffer | null = null;
  usernamePasswordForm: FormGroup;
  showPassword = false;
  showConfirm = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private service: DebuglinkService, private toast: ToastrService) {
    this.usernamePasswordForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],

      password: ['', Validators.required],
      confirm: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.usernamePasswordForm.valid) {
      // Faites quelque chose avec les données du formulaire
      this.signIn(); 
    } else {
      // Gérer les cas d'erreur ou les champs non valides
      this.toast.error("Le formulaire n'est pas valide.","erreur")
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }


  signIn() {
    this.service.onSignIn(this.usernamePasswordForm.value).subscribe(  (res: any) => {
      if (res.success)  {
 
        this.toast.success("compte creer avec success, veuillez vous connecter", "success");
        this.router.navigate(['/login']);

      }
      else {
        this.toast.error("an error occured","erreur");
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  togglePasswordVisibility() {
    this.showConfirm = !this.showConfirm;
  }
  togglePasswordVisibilit() {
    this.showPassword = !this.showPassword;
  }
}
