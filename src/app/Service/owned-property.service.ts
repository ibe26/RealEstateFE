import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API, LocalStorageHelper } from '../API';
import { Observable } from 'rxjs';
import { OwnedProperty, OwnedPropertyDTO } from '../Model/OwnedProperty';
import { JsonResult } from '../Model/JsonResult';

@Injectable({
  providedIn: 'root'
})
export class OwnedPropertyService {

  private httpClient=inject(HttpClient);
  private readonly domain=API.domainUrl+"OwnedProperty/";
  private readonly domainImage=this.domain+"Image/"
  private readonly token=localStorage.getItem(LocalStorageHelper.tokenKey);
  headers:HttpHeaders=new HttpHeaders({ 'Authorization': 'Bearer ' + this.token });

  public getList():Observable<Array<OwnedProperty>>{
    return this.httpClient.get<Array<OwnedProperty>>(this.domain)
  }

  public getById(id:number):Observable<OwnedProperty>{
    return this.httpClient.get<OwnedProperty>(`${this.domain+id}`)
  }

  public post(ownedPropertyDTO:OwnedPropertyDTO):Observable<OwnedPropertyDTO>{
    return this.httpClient.post<OwnedPropertyDTO>(this.domain,ownedPropertyDTO,{headers:this.headers})
  }

  public update(ownedPropertyDTO:OwnedPropertyDTO,id:string):Observable<OwnedPropertyDTO>{
    return this.httpClient.put<OwnedPropertyDTO>(this.domain+`${id}`,ownedPropertyDTO,{headers:this.headers})
  }

  public delete (id:string):Observable<JsonResult>{
    return this.httpClient.delete<JsonResult>(this.domain+`${id}`,{headers:this.headers})
  }

}