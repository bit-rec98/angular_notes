/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  users: any[] = []

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`) // Params a continuación de la URL
      .subscribe(
        (result: any) => this.users = result
      )
  }
}
 */
