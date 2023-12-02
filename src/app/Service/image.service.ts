import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { Photo } from '../Model/Photo';

@Injectable({providedIn: 'root'})
export class ImageService {
  private httpClient=inject(HttpClient)
  private readonly domain=API.domainUrl+"Image/";

  public get(propertyID:number):Observable<Array<Photo>>{
    return this.httpClient.get<Array<Photo>>(this.domain+API.getById+propertyID);
  }
  public post(images:any,propertyID:number):Observable<any>{
    return this.httpClient.post<any>(this.domain+API.insert+`?id=${propertyID}`,images);
  }
  public photos:Array<Photo>=[];
}