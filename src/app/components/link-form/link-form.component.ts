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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LinkFormComponent {
  @Output() formClosed = new EventEmitter<void>();

  closeForm() {
    this.formClosed.emit();
  }
}
