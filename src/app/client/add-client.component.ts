import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/client.model';
import { UserService } from '../http.service';

@Component
({
  // selector: 'add-client',
  templateUrl: './add-client.component.html'
})
export class AddUserComponent 
{

  // user: User = new User();
  user: User = new User(0, '', new Date(),'', 0);

  constructor(private router: Router, 
              private userService: UserService) {}

  createUser(): void 
  {
    this.userService.createUser(this.user)
        .subscribe( data => 
        {
          alert("User created successfully.");
        });
        // this.goToUsers();
  }

  goToUsers()
  {
    this.router.navigate
    (
      ['/users']
    );
  }

  cancel() 
    {
        this.user = null;
        this.router.navigate
        (
            ['/users']
        );
    }

}