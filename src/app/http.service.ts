import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from './models/client.model';
import { Group } from './models/group.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService 
{
// ДЛЯ РАБОТЫ С КЛИЕНТАМИ

  constructor(private http:HttpClient) {}

  private url = 'http://localhost:8084/';


  public getUsers()     
  {
    return this.http.get<User[]>(this.url + 'clients/all');
  }

  public getClient(id: number) 
  {
    return this.http.get(this.url + 'clients/get/' + id);
  }

  public createUser(user)    
  {
    return this.http.post<User>(this.url + 'clients/add', user);
  }

  //метод http.delete(url) не работает
  public deleteUser(user) 
  {
    return this.http.post(this.url + 'clients/delete/'+ user.id, user);
  }

  updateClient(id: number, user: User)
  {
      const urlParams = new HttpParams().set("id", id.toString());
      return this.http.post(this.url + 'clients/add', user, 
        { params: urlParams });
  }

  
  // ДЛЯ РАБОТЫ С ГРУППАМИ РИСКА

  public getGroups()     
  {
    return this.http.get<Group[]>(this.url + 'groups/all');
  }

  public getGroup(id: number) 
  {
    return this.http.get(this.url + 'groups/get/' + id);
  }

  updateGroup(id: number, group: Group)
  {
      const urlParams = new HttpParams().set("id", id.toString());
      return this.http.post(this.url + 'groups/save', group, 
        { params: urlParams });
  }
}