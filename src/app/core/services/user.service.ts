import { Injectable } from '@angular/core';
import { IService } from './i-service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IService<User> {

  constructor(private _httpClient: HttpClient) { }

  findAll(): Observable<Array<User>> {
    return this._httpClient.get<Array<User>>(
      `${environment.api}users`
    )
    .pipe(
      map((users: any[]) => {
        return users.map((user: any) => {
          const objUser: User = new User()
          objUser.id = user.id
          objUser.username = user.username
          objUser.password = user.password
          objUser.roles = user.roles
          return objUser
        })
      })
    )
  }
  findOne(id: number): Observable<User> {
    throw new Error('Method not implemented.');
  }
  add(t: User): Observable<User> {
    throw new Error('Method not implemented.');
  }
  update(t: User): Observable<HttpResponse<any>> {
    throw new Error('Method not implemented.');
  }
  delete(t: User): Observable<HttpResponse<any>> {
    throw new Error('Method not implemented.');
  }
}
