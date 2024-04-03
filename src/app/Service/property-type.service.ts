import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { PropertyType, PropertyTypeDTO } from '../Model/PropertyType';

@Injectable({providedIn: 'root'})
export class PropertyTypeService {
  
  private httpClient=inject(HttpClient)  
  private readonly domain=API.domainUrl+"PropertyType/";

  public getList():Observable<Array<PropertyType>>{
    return this.httpClient.get<Array<PropertyType>>(this.domain+API.getList)
  }

  public post(propertyTypeDTO:PropertyTypeDTO):Observable<any>{
    return this.httpClient.post<any>(this.domain+API.insert,propertyTypeDTO)
  }
}