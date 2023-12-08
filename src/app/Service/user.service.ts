import {  Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginDTO, RegisterDTO, User, UserDTO } from '../Model/User';
import { API, LocalStorageHelper } from '../API';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
    private httpClient=inject(HttpClient)
  private readonly domain=API.domainUrl+"User/";
  public readonly token=localStorage.getItem(LocalStorageHelper.tokenKey);
  private httpParams=new HttpParams();

    public getList():Observable<Array<User>>{
      return this.httpClient.get<Array<User>>(this.domain+API.getList)
    }
    public getById(id:number):Observable<UserDTO>{
      return this.httpClient.get<UserDTO>(`${this.domain+API.getById+id}`)
    }
    public register(registerDTO:RegisterDTO):Observable<User>{
      return this.httpClient.post<User>(this.domain+API.register,registerDTO)
    }
    public login(loginDTO:LoginDTO):Observable<UserDTO>{
     return this.httpClient.post<UserDTO>(this.domain+API.login,loginDTO);
    }
    public validateToken():Observable<number>{
      return this.httpClient.get<number>(this.domain+API.validateToken,{params:this.httpParams.append("token",this.token!)});
    }
}