import {  Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDTO, RegisterDTO, User, UserDTO } from '../Model/User';
import { API, LocalStorageHelper } from '../API';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    private httpClient=inject(HttpClient)
  private readonly domain=API.domainUrl+"User/";
  

    public getList():Observable<Array<User>>{
      return this.httpClient.get<Array<User>>(this.domain+API.getList)
    }
    public getById(id:number):Observable<User>{
      return this.httpClient.get<User>(`${this.domain+API.getById+id}`)
    }
    public register(registerDTO:RegisterDTO):Observable<User>{
      return this.httpClient.post<User>(this.domain+API.register,registerDTO)
    }
    public login(loginDTO:LoginDTO):Observable<UserDTO>{
     return this.httpClient.post<UserDTO>(this.domain+API.login,loginDTO);
    }
}