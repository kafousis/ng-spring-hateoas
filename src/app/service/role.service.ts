import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Role } from '../model/role.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class RoleService {

    private rolesUrl: string;

    constructor(private http: HttpClient) {
      this.rolesUrl = 'http://localhost:8080/rest/roles';
    }
  
    public findAll(): Observable<any> {
      return this.http.get<any>(this.rolesUrl).pipe(
        map(response => response._embedded.roles)
      );
    }
}