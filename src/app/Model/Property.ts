export interface Property extends PropertyDTO{
    propertyID:number
}

export interface PropertyDTO{
    propertyName:string,
    city:string,
    district:string,
    quarter:string,
    propertyTypeID:number,
    propertyListingTypeID:number,
    propertyPrice:number,
    bedroomCount:number,
    bathroomCount:number,
    size:number,
}

export interface PropertyFilterDTO{
    propertyName:string ,
    propertyTypeID:number,
    propertyListingTypeID:number,
    minPrice :number,
    maxPrice :number,
    bedroomCount:number 
    bathroomCount :number,
    size :number,
    city :string ,
    district :string ,
    quarter:string
}