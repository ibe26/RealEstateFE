import { Property } from "./Property"

export interface UserDTO {
    userID:number,
    email:string,
    firstName:string,
    lastName:string,
    properties:Array<Property>,
    token:string
  }
  
  export interface User{
    userID:number,
    email:string,
    firstName:string,
    lastName:string,
    properties:Array<Property>
  }
  
  
  export interface LoginDTO{
    email:string,
    password:string
  }
  
  export interface RegisterDTO extends LoginDTO{
    firstName:string,
    lastName:string
  }
  