import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../models/client.model';
import { UserService } from './client.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component
({
    selector: 'client-info',
    templateUrl: './client-info.component.html'
})
export class ClientInfoComponent implements OnInit
{
    //типы шаблонов
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    id: number;
    editedUser: User;
    private routeSubscription: Subscription;  
    // вызов редактора клиента
    // editor = this.editClient(new User(0, '','', 0));

    constructor(private serv: UserService, private route: ActivatedRoute) 
    {
        this.routeSubscription = route.queryParams.subscribe(
            params=>this.id=params['id']);
     }

    ngOnInit() 
    {
        this.editedUser = new User(0, '', '', 0);
        this.loadClient();

    }

    loadClient()
    {
        this.serv.getClient(this.id).subscribe((data: User) =>
        {
            this.editedUser = data;
        });
    }

    editClient(client: User) 
    {
        this.editedUser = new User
        (
            client.id, client.firstName, 
            client.riskGroup, client.pasportNumber
        );
    }

    // загружаем один из двух шаблонов
    loadTemplate(user: User) 
    {
        if (this.editedUser && this.editedUser.id == user.id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    // loadTemplate() 
    // {
    //     if (!this.editor) {
    //         return this.readOnlyTemplate;
            
    //     } else {
    //         return this.editTemplate;
            
    //     }
    // }

   
    saveClient(){
        this.serv.createUser(this.editedUser).subscribe(()=>{this.loadClient();});
    }
    
}
    // отмена редактирования
    // cancel() 
    // {
    // // если отмена при добавлении, удаляем последнюю запись
    //     // if (this.isNewRecord) {
    //     //     this.users.pop();
    //     //     this.isNewRecord = false;
    //     // }
    //     this.editedUser = null;
    // }



