import { Component, OnInit, inject } from '@angular/core';
import { PropertyService } from 'src/app/Service/property.service';
import { PropertyListComponent } from '../PropertyListing/property-list/property-list.component';
import { RouterModule } from '@angular/router';
import { Property } from 'src/app/Model/Property';
import { CommonModule } from '@angular/common';
import { LocalStorageHelper } from 'src/app/API';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Service/user.service';
import { map } from 'rxjs';
import { JsonResult } from 'src/app/Model/JsonResult';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone:true,
  imports:[PropertyListComponent,RouterModule,CommonModule]
})
export class MainPageComponent implements OnInit{
  ngOnInit(): void {
    this._propertyService.propertyList$=this._propertyService.getList().pipe(map(list=>list.filter(p=>p.onListing===true)));
    if(localStorage.getItem(LocalStorageHelper.tokenKey)){
      this.userService.validateToken().subscribe({next:(userID:JsonResult)=>{
        
        if(!userID)
        {
          localStorage.removeItem(LocalStorageHelper.tokenKey);
          return;
        }
        this.userService.getById(userID.value).subscribe(user=>{
          this.User=user;
        })
      },error:err=>{
        if(err.status===400){
          localStorage.removeItem(LocalStorageHelper.tokenKey);
          return;
        }
      }})
    }
  }

  
  private userService=inject(UserService);
  public _propertyService=inject(PropertyService);

  public User!:User;
  //public propertyList!:Array<Property>;
}
