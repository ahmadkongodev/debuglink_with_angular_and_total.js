import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
 import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DebuglinkService } from '../../service/debuglink.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmodalComponent } from '../confirmodal/confirmodal.component';


@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  imageUrl: string | ArrayBuffer | null = null;
  public getUsername: any;
  constructor(private router: Router, private dialog: MatDialog, private service: DebuglinkService) {

  }

  ngOnInit() {
    //recuperer les informations lors de l'initialisation du composant
    this.loadUserInformation();
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

  //methode pour recuperer les info de l'utilisateur
  loadUserInformation() {

    this.service.getProfile().subscribe((res: any) => {
      this.getUsername = res.username

    })
  }
  showConfirm(){

    this.dialog.open(ConfirmodalComponent);
    
  }
  


  goToAbout() {
    this.router.navigate(['/about']);
   }

   goToHome() {
    this.router.navigate(['/main']);
   }
}
