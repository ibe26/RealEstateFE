import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, LocalStorageHelper } from '../API';
import { Property, PropertyDTO, PropertyFilterDTO } from '../Model/Property';

@Injectable({providedIn: 'root'})
export class PropertyService {
  private httpClient=inject(HttpClient)
  private readonly domain=API.domainUrl+"Property/";
  private readonly token=localStorage.getItem(LocalStorageHelper.tokenKey);
  headers:HttpHeaders=new HttpHeaders({ 'Authorization': 'Bearer ' + this.token });
  
  public getList():Observable<Array<Property>>{
    return this.httpClient.get<Array<Property>>(this.domain+API.getList)
  }

  public getFilteredList(filteredProperty:PropertyFilterDTO):Observable<Array<Property>>{
    return this.httpClient.post<Array<Property>>(this.domain+API.filterList,filteredProperty)
  }

  public getById(id:number):Observable<Property>{
    return this.httpClient.get<Property>(`${this.domain+API.getById+id}`)
  }

  public post(propertyDTO:PropertyDTO):Observable<any>{
    return this.httpClient.post<any>(this.domain+API.insert,propertyDTO,{headers:this.headers})
  }

  public update(propertyDTO:PropertyDTO,id:number):Observable<PropertyDTO>{
    return this.httpClient.post<PropertyDTO>(this.domain+API.update+`${id}`,propertyDTO,{headers:this.headers})
  }

  public delete (id:number):Observable<number>{
    return this.httpClient.delete<number>(this.domain+API.deleteById+`${id}`,{headers:this.headers})
  }

  public propertyList$!:Observable<Array<Property>>;
}