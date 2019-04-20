import {Injectable} from '@angular/core';
import {Consultant, Startup, Login} from './store';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  login(email: String, password: String): Observable<Login> {
    let body = {
      "email": email,
      "password": password
    }
    return this.http.post<Login>('http://localhost:3000/Users/login', body, this.httpOptions);
  }

  createUser() {

  }

  startupList() {
    return this.http.get(`/api/startups`);
  }

  addStartup(startup: Startup): Observable<Startup> {
    return this.http.post<Startup>(`/api/startups`, startup);
  }

  putStartup(startup: Startup) {
    return this.http.put(`/api/startups`, startup);
  }

  /*getStartup(id: number) {
    return this.http.get(`/api/startups/${id}`);
  }*/

  deleteStartup(id: number) {
    return this.http.delete(`/api/startups/${id}`);
  }

  consultantList() {
    return this.http.get(`/api/consultants`);
  }

  deleteConsultant(id: number) {
    return this.http.delete(`/api/consultants/${id}`);
  }

  putConsultant(consultant: Consultant) {
    return this.http.put(`/api/consultants`, consultant);
  }
}
