import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  standalone: true,
  imports: [],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.css'
})
export class CrisisListComponent {
  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/home']);
  }
}
