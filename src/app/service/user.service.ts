import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { User } from '../model/user.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/rest/users';
  }

  public findAll(): Observable<any> {
    return this.http.get<any>(this.usersUrl).pipe(
      map(response => response._embedded.users)
    );
  }

  public findById(id: string): Observable<User> {
    return this.http.get<any>(`${this.usersUrl}/${id}`)
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}