
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LinkFormComponent } from '../link-form/link-form.component';
import { SidenavComponent } from "../sidenav/sidenav.component";

import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Link {
  id: number;
  name: string;
  category: string;
  url: string;
  hashtag: string;
}

@Component({
    selector: 'app-main-page',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule,MatIconModule, LinkFormComponent, SidenavComponent]
})
export class MainPageComponent {

  menuOpen = false;

  isMenuOpen = false;
  isFormOpen = false;
  links: Link[] = [
    { id: 1, name: 'UI_Button_Submit_Click', category: 'UI (User Interface)', url: 'https://example.com/debug/ui/button_submit_click', hashtag: '#UI #Button #Click' },
    { id: 2, name: 'Network_Request_UserData', category: 'Network', url: 'https://example.com/debug/network/request_userdata', hashtag: '#Network #Request #UserData' },
    { id: 3, name: 'Database_Insert_User', category: 'Database', url: 'https://example.com/debug/database/insert_user', hashtag: '#Database #Insert #User' },
    { id: 4, name: 'Error_FileNotFound', category: 'Error', url: 'https://example.com/debug/error/file_not_found', hashtag: '#Error #FileNotFound' },
    { id: 5, name: 'Performance_RenderTime', category: 'Performance', url: 'https://example.com/debug/performance/render_time', hashtag: '#Performance #RenderTime' },
    { id: 6, name: 'Auth_FailedLogin', category: 'Authentication', url: 'https://example.com/debug/auth/failed_login', hashtag: '#Authentication #FailedLogin' },
    { id: 7, name: 'Config_LoadSettings', category: 'Configuration', url: 'https://example.com/debug/config/load_settings', hashtag: '#Config #LoadSettings' },
  ];


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closemenu() {
    this.menuOpen = false;
  }
  openLinkForm() {
    this.isFormOpen = true;
  }

  closeLinkForm() {
    this.isFormOpen = false;
  }

  deleteLink(id: number) {
    this.links = this.links.filter(link => link.id !== id);
  }
}
