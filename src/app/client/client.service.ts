import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../models/client.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

    private userUrl = 'http://localhost:8084/';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl + 'clients/all');
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl + 'clients/add', user);
  }

  //метод http.delete(url) не работает
  public deleteUser(user) {
    return this.http.post(this.userUrl + 'clients/delete/'+ user.id, user);
  }

  //новый метод для редектирование клиента(может не работать)
  // updateClient(id: number, user: User)
  // {
  //     const urlParams = new HttpParams().set("id", id.toString());
  //     return this.http.put(this.userUrl + 'clients/' + user.id, user, 
  //       { params: urlParams });
  // }

  updateClient(id: number, user: User)
  {
      const urlParams = new HttpParams().set("id", id.toString());
      return this.http.put(this.userUrl + 'clients/' + user.id, user, 
        { params: urlParams });
  }

//новый метод для получения одного клиента (может не работать)
  public getClient(id: number) {
    return this.http.get(this.userUrl + 'clients/get/' + id);
  }
}