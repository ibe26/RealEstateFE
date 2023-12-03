import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../API';
import { Observable } from 'rxjs';
import { PropertyListingType, PropertyListingTypeDTO } from '../Model/PropertyListingType';

@Injectable({providedIn: 'root'})
export class PropertyListingTypeService {
  
  private httpClient=inject(HttpClient)  
  private readonly domain=API.domainUrl+"PropertyListingType/";

  public getList():Observable<Array<PropertyListingType>>{
    return this.httpClient.get<Array<PropertyListingType>>(this.domain+API.getList)
  }

  public post(propertyListingTypeDTO:PropertyListingTypeDTO):Observable<any>{
    return this.httpClient.post<any>(this.domain+API.insert,propertyListingTypeDTO)
  }
}