import { Component, inject } from '@angular/core';
// import { GetService } from '../../services/get-service.service';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // readonly getService = inject(GetService);

  users: any[] = [];

  posts: any[] = [];

  post: any = {
    title: '',
    body: ''
  }

  singlePost: any;

  // userFG: FormGroup;

  constructor(
    private http: HttpClient
  ){}

  // GET methods
  getUsers(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (result: any) => {
          this.users = result
        }
      )
  }

  getPosts(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (result: any) => {
          this.posts = result;
        }
      )
  }

  getPostById(id: number): void {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(
        (result: any) => {
          this.singlePost = result;
        }
      )
  }

  // POST METHOD
  createPost(): void {
    const body = this.post;
    this.http.post('https://jsonplaceholder.typicode.com/posts', body)
      .subscribe(
        (result: any) => {
          if(result){
            console.log(result);
            this.singlePost = result;
            // this.getPostById(result.id); - renderizar elemento creado en caso de guardarse en db
          }
        }
      )

    }

  clearUsers(): void {
    this.users = [];
  }
  clearPosts(): void {
    this.posts = [];
  }

}
