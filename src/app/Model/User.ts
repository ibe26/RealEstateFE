import { Property } from "./Property"

export interface UserDTO {
    userID:number,
    email:string,
    firstName:string,
    lastName:string,
    token:string
  }
  
  export interface User{
    userID:number,
    email:string,
    firstName:string,
    lastName:string,
    posts:Array<Property>
  }
  
  
  export interface LoginDTO{
    email:string,
    password:string
  }
  
  export interface RegisterDTO extends LoginDTO{
    firstName:string,
    lastName:string
  }
  