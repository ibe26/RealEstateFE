import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API, LocalStorageHelper } from '../API';
import { Observable } from 'rxjs';
import { Photo } from '../Model/Photo';
import { RequestOptions } from '@angular/http';

@Injectable({providedIn: 'root'})
export class ImageService {
  private httpClient=inject(HttpClient)
  private readonly domain=API.domainUrl+"Image/";
  private readonly token=localStorage.getItem(LocalStorageHelper.tokenKey);
  headers:HttpHeaders=new HttpHeaders({ 'Authorization': 'Bearer ' + this.token });

  public get(propertyID:number):Observable<Array<Photo>>{
    return this.httpClient.get<Array<Photo>>(this.domain+API.getById+propertyID);
  }
  public post(images:FormData,propertyID:number):Observable<string>{
    return this.httpClient.post<string>(this.domain+API.insert+`?id=${propertyID}`,images,{headers:this.headers});
  }
  public delete(imageName:string,propertyID:number):Observable<number>{
    return this.httpClient.delete<number>(this.domain+API.deleteById+`?propertyId=${propertyID}&imageName=${imageName}`,{headers:this.headers})
  }
  public photos:Array<Photo>=[];
}