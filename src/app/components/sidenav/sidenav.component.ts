import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, MatDividerModule]
})
export class SidenavComponent {
  // constructor(private router: Router) { }

  // navigateToProfile() {
  //   this.router.navigate(['/profil']);
  // }
  menuOpen = false;

  closeMenu() {
    this.menuOpen = false;
  }
  
  openMenu() {
    this.menuOpen = true;
  }

  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about']);
  }
  goToProfil() {
    this.router.navigate(['/profil']);
  }
}
