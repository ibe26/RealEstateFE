import { PropertyType } from "./PropertyType";

export interface OwnedProperty {
    propertyID: number,
    propertyName: string,
    dateAdded: Date,
    propertyPrice: number,
    grossArea: number,
    netArea: number,
    yield: number,
    propertyTypeID: number,
    propertyType: PropertyType,
    userID: string,
    priceYieldRatio: number
}

export interface OwnedPropertyDTO {
    propertyName: string;
    propertyPrice: number;
    grossArea: number;
    netArea: number;
    propertyTypeID: number;
    userID: string;
    yield: number;
}
