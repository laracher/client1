import { Component } from '@angular/core';
import { Group } from '../models/group.model';
import { Router } from '@angular/router';
import { UserService } from '../http.service';

@Component
({
    selector: 'group-comp',
    templateUrl: './group.component.html'
})
export class GroupComponent 
{
    groups: Group [];

    constructor(private router: Router, private service: UserService) {}

    ngOnInit() 
    {
    this.service.getGroups()
        .subscribe( data => {
            this.groups = data;
        });
    }

    goGroupEdit(group: Group)
    {
        this.router.navigate
        (
            ['/group-edit'],
            { queryParams: {'id': group.id} }
        );
    }
}