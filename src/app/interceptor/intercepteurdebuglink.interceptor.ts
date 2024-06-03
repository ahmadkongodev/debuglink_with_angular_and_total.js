import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { catchError, throwError } from 'rxjs';
export const intercepteurdebuglinkInterceptor: HttpInterceptorFn = (req, next) => {


  var toast= inject(ToastrService);
   
  //recuperer le token de l'utilisateur
  const authToken = localStorage.getItem('token');
  // Cloner la requete et ajouter un   header d'authorisation
  const authRequest = req.clone({
    setHeaders: {
      Authorization: authToken ?? "no token"
    }
  });
  //renvoyer la nouvel requete pour la suite
  return next(authRequest).pipe(
    catchError((err: any) => {
      let errorMessage = "";

      if (err.err instanceof ErrorEvent) {
        
        errorMessage = 'An error occurred ' + err.error.message;

      }
      else {
        console.error("Backend returned code " + err.status, "Message: " + err.message);
        errorMessage = "Backend returned code " + err.status + "Message: " + err.message;
      }
      if (err.status == 404) {

        errorMessage = 'link not found';
      }
      else if (err.status === 500) {
        errorMessage = 'Internal server error';
      }
      else if (err.status === 400) {
        errorMessage = 'Unauthorized';
alert(errorMessage)

        console.log(errorMessage)
      }
      else {
        errorMessage = 'An error occurred';
        
      }
 
      // Re-throw the error to propagate it further
      return throwError(() =>  errorMessage);
    })
  );;
};
