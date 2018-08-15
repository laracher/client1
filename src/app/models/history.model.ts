import { User } from './client.model';
import { Group } from './group.model';

export class History
{
    id: number;
    client: User;
    group: Group;
    date: Date;

    constructor
    (
        id: number,
        client: User,
        group: Group,
        date: Date
    ) 
    {
        this.id = id;
        this.client = client;
        this.group = group;
        this.date = date;
    }
}