import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ImageService {
  private httpClient=inject(HttpClient)
  private readonly domain=API.domainUrl+"Image/";

  public get(propertyID:number):Observable<Array<string>>{
    return this.httpClient.get<Array<string>>(this.domain+API.getImages+propertyID);
  }
  public post(images:any,propertyID:number):Observable<any>{
    return this.httpClient.post<any>(this.domain+API.uploadImages+`?propertyID=${propertyID}`,images);
  }

}