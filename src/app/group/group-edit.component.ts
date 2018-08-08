import { Component, OnInit } from '@angular/core';
import { Group } from '../models/group.model';
import { Subscription } from 'rxjs';
import { UserService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component 
({
    selector: 'group-edit',
    templateUrl: './group-edit.component.html'
})
export class GroupEditComponent implements OnInit
{
    id: number;
    editedGroup: Group;
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
        this.editedGroup = new Group(0, '', 0, 0);
        this.loadGroup();  
    }

    loadGroup()
    {
        this.serv.getGroup(this.id).subscribe((data: Group) =>
        {
            this.editedGroup = data;
        });
        this.editGroup(this.editedGroup);
    }

    editGroup(group: Group) 
    {
        this.editedGroup = new Group
        (
            group.id, group.groupName, 
            group.lowerLimit, group.upperLimit
        );
    }

    saveGroup()
    {
        this.serv.updateGroup(this.id, this.editedGroup).subscribe(data=>
        {
            this.loadGroup();
        });
        this.editedGroup = null;

        this.router.navigate(
            ['/groups']
        );
    }

    cancel() 
    {
        this.editedGroup = null;

        this.router.navigate(
            ['/groups']
        );
    }
}