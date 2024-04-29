import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API, LocalStorageHelper } from '../API';
import { Observable } from 'rxjs';
import { OwnedProperty, OwnedPropertyDTO } from '../Model/OwnedProperty';
import { JsonResult } from '../Model/JsonResult';
import { Photo } from '../Model/Photo';

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

  public post(ownedPropertyDTO:OwnedPropertyDTO):Observable<OwnedProperty>{
    return this.httpClient.post<OwnedProperty>(this.domain,ownedPropertyDTO,{headers:this.headers})
  }

  public update(ownedPropertyDTO:OwnedPropertyDTO,id:number):Observable<OwnedPropertyDTO>{
    return this.httpClient.put<OwnedPropertyDTO>(this.domain+`${id}`,ownedPropertyDTO,{headers:this.headers})
  }

  public delete (id:number):Observable<JsonResult>{
    return this.httpClient.delete<JsonResult>(this.domain+`${id}`,{headers:this.headers})
  }

  public imageGet(propertyID:number):Observable<Array<Photo>>{
    return this.httpClient.get<Array<Photo>>(this.domainImage+propertyID);
  }
  public imagePost(images:FormData,propertyID:number):Observable<string>{
    return this.httpClient.post<string>(this.domainImage+propertyID,images,{headers:this.headers});
  }
  public imageDelete(imageName:string,propertyID:number):Observable<JsonResult>{
    return this.httpClient.delete<JsonResult>(this.domainImage+`?id=${propertyID}&imageName=${imageName}`,{headers:this.headers})
  }

  public ownedPropertyList!:OwnedProperty[];
}