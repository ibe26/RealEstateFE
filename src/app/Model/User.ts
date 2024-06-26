import { Property } from "./Property"

export interface UserDTO {
    userID:string,
    email:string,
    firstName:string,
    lastName:string,
    listedProperties:Array<Property>,
    token:string
  }
  
  export interface User{
    userID:string,
    email:string,
    firstName:string,
    lastName:string,
    listedProperties:Array<Property>
  }
  
  
  export interface LoginDTO{
    email:string,
    password:string
  }
  
  export interface RegisterDTO extends LoginDTO{
    firstName:string,
    lastName:string
  }
