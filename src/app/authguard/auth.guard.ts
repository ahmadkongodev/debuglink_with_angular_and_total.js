import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router= inject(Router)

  if (localStorage.getItem("token")) {
    //plus besoin de s'authentifier
    router.navigate(['/main']);
    return false;
  } else {
    //authentification necessaire
    return true;
  }
};
