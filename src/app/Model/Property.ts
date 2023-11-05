import { PropertyListingType } from "./PropertyListingType"
import { PropertyType } from "./PropertyType"

export interface Property extends PropertyDTO{
    propertyID:number
}

export interface PropertyDTO{
    propertyName:string,
    city:string,
    district:string,
    quarter:string,
    propertyTypeID:number,
    propertyType:PropertyType,
    propertyListingTypeID:number,
    propertyListingType:PropertyListingType,
    propertyPrice:number,
    bedroomCount:number,
    bathroomCount:number,
    grossArea :number,
    netArea :number,
    balcony:boolean,
    heatSystem:string,
    dues:number,
    description:string,
    dateListed:Date,
    buildedYear:number

}

export interface PropertyFilterDTO{
    propertyName:string ,
    propertyTypeID:number,
    propertyListingTypeID:number,
    minPrice :number,
    maxPrice :number,
    bedroomCount:number 
    bathroomCount :number,
    grossArea :number,
    netArea :number,
    city :string ,
    district :string ,
    quarter:string,
    timeFilter:number,
    balcony:boolean,
    heatSystem:string,
}