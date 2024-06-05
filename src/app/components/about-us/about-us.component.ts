import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css'],
    imports: [MatIconModule,]
})
export class AboutUsComponent {
    constructor(private router:Router){}
  goToProfil() {
    this.router.navigate(['/profil']);
   }

   goToHome() {
    this.router.navigate(['/main']);
   }
}
