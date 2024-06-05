import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule } from '@angular/material/button';
import { DebuglinkService } from '../../service/debuglink.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmodal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,MatButtonModule],
  templateUrl: './confirmodal.component.html',
  styleUrl: './confirmodal.component.css'
})
export class ConfirmodalComponent {
 
  constructor( private router:Router,private service: DebuglinkService, public dialogRef: MatDialogRef<ConfirmodalComponent >){
    
  }
  logout(){ 
      this.service.logout().subscribe((res: any) => {
        console.log("logout", res)
        if (res.success) {
          //supprimer token au logout
          localStorage.removeItem('token');
          console.log('token:', localStorage.getItem('token'));
          this.router.navigate(['/login']);
        }
      })
    
    this.dialogRef.close();
    }
}
