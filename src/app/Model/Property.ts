import { PropertyListingType } from "./PropertyListingType"
import { PropertyType } from "./PropertyType"

export interface Property extends PropertyDTO{
    propertyID:number,
    userID:number,
    propertyName:string,
    city:string,
    district:string,
    quarter:string,
    propertyType:PropertyType,
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
    buildedYear:number,
    floor:number,
    totalFloor:number
}

export interface PropertyDTO{
    propertyName:string,
    userID:number,
    city:string,
    district:string,
    quarter:string,
    propertyTypeID:number,
    propertyListingTypeID:number,
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
    buildedYear:number,
    floor:number,
    totalFloor:number
}

export interface PropertyFilterDTO{
    propertyName:string ,
    propertyTypeID:number,
    propertyListingTypeID:number,
    minPrice :number,
    maxPrice :number,
    bedroomCount:number,
    city :string ,
    district :string ,
    quarter:string,
    balcony:boolean,
    heatSystem:string,
}