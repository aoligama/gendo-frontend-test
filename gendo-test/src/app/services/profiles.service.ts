import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(
    private http: HttpClient
  ) { }

  apiURL: string = environment.apiURL;

  getProfiles(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/users`)
    .pipe( map((data: any) => data) )
  }

  getProfileByLogin(login) : Observable<any>{
    return this.http.get<any>(`${this.apiURL}/users/${login}`)
    .pipe( map((data: any) => data) )
  }

  getRepos(login) : Observable<any>{
    return this.http.get<any>(`${this.apiURL}/users/${login}/repos`)
    .pipe( map((data: any) => data) )
  }

  getStarred(login) : Observable<any>{
    return this.http.get<any>(`${this.apiURL}/users/${login}/starred`)
    .pipe( map((data: any) => data) )
  }


}
