import { Routes } from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { MainPageComponent } from './components/main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfilComponent } from './profil/profil.component';
import { authentificationGuard } from './authguard/authentification.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authGuard } from './authguard/auth.guard';
 

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //page par defaut  
    { path: 'home', component: HomeComponent , canActivate:[authGuard]},
    { path: 'login', component: LoginComponent, canActivate:[authGuard]},
    { path: 'sign', component: SignComponent, canActivate:[authGuard]},
    { path: 'main', component: MainPageComponent, canActivate: [authentificationGuard]},
    { path: 'about', component: AboutUsComponent, canActivate: [authentificationGuard]},
    { path: 'profil', component: ProfilComponent, canActivate: [authentificationGuard]},
     { path: '**', component: PagenotfoundComponent },
];
