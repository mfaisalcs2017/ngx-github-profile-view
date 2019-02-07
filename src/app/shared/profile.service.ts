import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from "../shared/profile.model";
import 'rxjs/Rx';
import 'rxjs/Operator';
import { Observable } from 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { 
  }

  getProfileInfo(): Observable<Profile[]> {
   return this.httpClient.get<Profile[]>("https://api.github.com/users" , {
    observe: 'body',  
    responseType: 'json'
    })
  }

  getUserDetails(): Observable<any> {
    return this.httpClient.get<Profile[]>("https://api.github.com/users/akashdeepsinghal" , {
      observe: 'body',
      responseType: 'json'
    })
  }

  getUserRepos(): Observable<any> {
    return this.httpClient.get<Profile[]>("https://api.github.com/users/akashdeepsinghal/repos" , {
      observe: 'body',
      responseType: 'json'
    })
  }
  getUserFollowers(): Observable<any> {
    return this.httpClient.get<Profile[]>("https://api.github.com/users/akashdeepsinghal/followers" , {
      observe: 'body',
      responseType: 'json'
    })
  }

}


