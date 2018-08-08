import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../models/client.model';
import { UserService } from '../http.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component
({
    selector: 'client-info',
    templateUrl: './client-info.component.html'
})
export class ClientInfoComponent implements OnInit
{
    id: number;
    editedUser: User;
    private routeSubscription: Subscription;  

    constructor(
        private serv: UserService, 
        private route: ActivatedRoute,
        private router: Router) 
    {
        this.routeSubscription = route.queryParams.subscribe(
            params=>this.id=params['id']);
    }

    ngOnInit() 
    {
        this.editedUser = new User(0, '', new Date(), '', 0);
        this.loadClient();
    }

    loadClient()
    {
        this.serv.getClient(this.id).subscribe((data: User) =>
        {
            this.editedUser = data;
        });
        this.editClient(this.editedUser);
    }

    editClient(client: User) 
    {
        this.editedUser = new User
        (
            client.id, client.firstName, client.dob,
            client.riskGroup, client.pasportNumber
        );
    }
   
    saveClient()
    {
        this.serv.updateClient(this.id, this.editedUser).subscribe(data=>
        {
            this.loadClient();
        });
        this.editedUser = null;

        this.router.navigate(
            ['/users']
        );
    }
    
    // отмена редактирования
    cancel() 
    {
        this.editedUser = null;

        this.router.navigate(
            ['/users']
        );
    }
}


