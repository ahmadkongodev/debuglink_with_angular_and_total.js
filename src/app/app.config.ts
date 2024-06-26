import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { intercepteurdebuglinkInterceptor } from './interceptor/intercepteurdebuglink.interceptor';
import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideToastr(
    {
      closeButton: true,
      timeOut: 5000,
      positionClass: "toast-center-center"
    }
  ),
   provideHttpClient(withInterceptors([intercepteurdebuglinkInterceptor]))]

};
