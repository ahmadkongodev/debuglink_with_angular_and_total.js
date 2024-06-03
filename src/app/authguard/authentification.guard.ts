import { inject } from '@angular/core';
import { CanActivateFn ,Router } from '@angular/router';

 export const authentificationGuard: CanActivateFn = (route, state) => {
   //creation dune instance de route en raison de l'absence de constructeur
  const router= inject(Router)

  if (localStorage.getItem("token")) {
    console.log("true")
    return true;
  } else {
    alert("non authoriser, veuillez vous connecter")
    router.navigate(['/login']);
    console.log("false")
    return false;
  }
};
