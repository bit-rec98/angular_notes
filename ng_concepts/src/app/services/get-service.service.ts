import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  users: any[] = []

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {}

  getUsers(): any {
    return this.http.get(`${this.apiUrl}/users`) /* Params a continuación de la URL */
      .subscribe(
        (user) => this.users.push(user)
      )
  }
}
