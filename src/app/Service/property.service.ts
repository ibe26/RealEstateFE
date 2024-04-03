import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, LocalStorageHelper } from '../API';
import { Property, PropertyDTO, PropertyFilterDTO } from '../Model/Property';
import { Photo } from '../Model/Photo';
import { JsonResult } from '../Model/JsonResult';

@Injectable({providedIn: 'root'})
export class PropertyService {
  private httpClient=inject(HttpClient)
  private readonly domain=API.domainUrl+"Property/";
  private readonly domainImage=this.domain+"Image/"
  private readonly token=localStorage.getItem(LocalStorageHelper.tokenKey);
  headers:HttpHeaders=new HttpHeaders({ 'Authorization': 'Bearer ' + this.token });
  
  public getList():Observable<Array<Property>>{
    return this.httpClient.get<Array<Property>>(this.domain)
  }

  public getFilteredList(filteredProperty:PropertyFilterDTO):Observable<Array<Property>>{
    return this.httpClient.post<Array<Property>>(this.domain+API.filterList,filteredProperty)
  }

  public getById(id:string):Observable<Property>{
    return this.httpClient.get<Property>(`${this.domain+id}`)
  }

  public post(propertyDTO:PropertyDTO):Observable<any>{
    return this.httpClient.post<any>(this.domain,propertyDTO,{headers:this.headers})
  }

  public update(propertyDTO:PropertyDTO,id:string):Observable<PropertyDTO>{
    return this.httpClient.put<PropertyDTO>(this.domain+`${id}`,propertyDTO,{headers:this.headers})
  }

  public delete (id:string):Observable<JsonResult>{
    return this.httpClient.delete<JsonResult>(this.domain+`${id}`,{headers:this.headers})
  }

  public imageGet(propertyID:string):Observable<Array<Photo>>{
    return this.httpClient.get<Array<Photo>>(this.domainImage+propertyID);
  }
  public imagePost(images:FormData,propertyID:string):Observable<string>{
    return this.httpClient.post<string>(this.domainImage+propertyID,images,{headers:this.headers});
  }
  public imageDelete(imageName:string,propertyID:string):Observable<JsonResult>{
    return this.httpClient.delete<JsonResult>(this.domainImage+`?propertyGUID=${propertyID}&imageName=${imageName}`,{headers:this.headers})
  }
  public photos:Array<Photo>=[];
  public propertyList$!:Observable<Array<Property>>;
}