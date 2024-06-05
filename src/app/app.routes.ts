import { Routes } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { MainPageComponent } from './components/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProfilComponent } from './components/profil/profil.component';
import { authentificationGuard } from './authguard/authentification.guard';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { authGuard } from './authguard/auth.guard';
 

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //page par defaut  

    //l'utilisateur sera diriger vers ses liens si il n'est pas encore authentifier
    //s'il s'etait authentifier alors ses pages ne lui apparaitrons pas
    { path: 'home', component: HomeComponent , canActivate:[authGuard]},
    { path: 'login', component: LoginComponent, canActivate:[authGuard]},
    { path: 'sign', component: SignComponent, canActivate:[authGuard]},
    //l'utilisateur ne peut pas acceder a ces routes sans s'etre authentifier
    { path: 'main', component: MainPageComponent, canActivate: [authentificationGuard]},
    { path: 'about', component: AboutUsComponent, canActivate: [authentificationGuard]},
    { path: 'profil', component: ProfilComponent, canActivate: [authentificationGuard]},
    //l'utilisateur sera rediger vers ce component pour toute entree d'url non definie

    { path: '**', component: PagenotfoundComponent },
];
