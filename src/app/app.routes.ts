import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { MainPageComponent } from './components/main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfilComponent } from './profil/profil.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //page par defaut 
    { path: 'crisis-list', component: CrisisListComponent },
    { path: 'heroes-list', component: HeroesListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'sign', component: SignComponent},
    { path: 'main', component: MainPageComponent},
    { path: 'about', component: AboutUsComponent},
    { path: 'profil', component: ProfilComponent},
];
