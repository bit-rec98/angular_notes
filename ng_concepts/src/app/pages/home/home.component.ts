import { Component, inject } from '@angular/core';
import { GetService } from '../../services/get-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly getService = inject(GetService);

  users: any[] = []

  constructor(){}

  ngOnInit(): void {
    this.users = this.getService.getUsers();
    console.log(this.users);
  }
}
