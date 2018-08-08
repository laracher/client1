import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/client.model';
import { UserService } from '../http.service';

@Component
({
  selector: 'app-user',
  templateUrl: './client.component.html'
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, 
              private userService: UserService) {}

  ngOnInit() 
  {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

    goClientInfo(client: User)
    {
        this.router.navigate
        (
            ['/client-info'],
            { queryParams: {'id': client.id} }
        );
    }

  deleteUser(user: User): void 
  {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }
}