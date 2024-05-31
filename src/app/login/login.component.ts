import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  imageUrl: string | ArrayBuffer | null = null;
  emailPasswordForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.emailPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
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

  onSubmit() {
    if (this.emailPasswordForm.valid) {
      // Faites quelque chose avec les données du formulaire
      console.log(this.emailPasswordForm.value);
    } else {
      // Gérer les cas d'erreur ou les champs non valides
      console.log("Le formulaire n'est pas valide.");
    }
  }

  goToSign() {
    this.router.navigate(['/sign']);
  }
}
