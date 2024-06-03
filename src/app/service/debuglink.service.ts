import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { Observable } from 'rxjs';
//import the user model 
import { User } from '../models/user';
//import of httpClient to connect the app to the API
import { HttpClient } from '@angular/common/http';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root'
})
export class DebuglinkService {

  constructor(private http: HttpClient) { }

   // gestion des utilisateurs

  //  methode to login a user
  onLogin(user: User) : Observable<any> {
    return this.http.post(`${Constants.userbaseUrl}/login`,user)
  }
  //  methode to register a user
   onSignIn(obj: any){
    return this.http.post(`${Constants.userbaseUrl}/register`,obj)
   }
  //methode to retrieve user profile information
  getProfile(){
    return this.http.get(`${Constants.userbaseUrl}/profile`)
  }
  //logout methode
  logout(){
    return this.http.get(`${Constants.userbaseUrl}/logout`) 
    //puis delete token
  }

  // gestion des liens
  getAllLinks(){
    return this.http.get(Constants.linksbaseUrl)
  }
  searchLinks(search: string){
    return this.http.get(`${Constants.linksbaseUrl}/?search=${search}`)

  }
  insertLink(link: Link){
    return this.http.post(Constants.linksbaseUrl,link)

  }

   //il faut empecher qu'on puisse naviguer a travers le site a laide de l'url
}
