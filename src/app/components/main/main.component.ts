import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LinkFormComponent } from '../link-form/link-form.component';
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Link } from '../../models/link';
import { DebuglinkService } from '../../service/debuglink.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, LinkFormComponent, SidenavComponent]
})
export class MainPageComponent implements OnInit {

  searchTerm = '';
  isMenuOpen = false;
  isFormOpen = false;
  links: any[] = [];

  constructor(private service: DebuglinkService, private router: Router) { }

  ngOnInit() {
    this.getLinks();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  openLinkForm() {
    this.isFormOpen = true;
  }

  closeLinkForm() {
    this.isFormOpen = false;
  }

  getLinks() {
    this.service.getAllLinks().subscribe((res: any) => {
      if (res) {
        this.links = res;
      } else {
        alert("erreur");
        alert(res[0]["error"]);
      }
    });
  }

  search() {
    this.service.searchLinks(this.searchTerm).subscribe((res: any) => {
      if (res) {
        this.links = res;
        console.log("found");
      } else {
        alert("erreur");
        alert(res[0]["error"]);
      }
    });
  }

  goToAbout() {
    this.router.navigate(['/about']);
    this.closeMenu();
  }

  goToProfil() {
    this.router.navigate(['/profil']);
    this.closeMenu();
  }
}
