import { Component, OnInit, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { LocalStorageHelper } from 'src/app/API';
import { User } from 'src/app/Model/User';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { UserNamePipe } from 'src/app/Pipe/user-name.pipe';
import { JsonResult } from 'src/app/Model/JsonResult';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule,MatIconModule,RouterModule,CommonModule,MatMenuModule,UserNamePipe],
})
export class NavbarComponent implements OnInit {
 public ngOnInit(): void {
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

  public User!:User;

public Logout() {
localStorage.removeItem(LocalStorageHelper.tokenKey);
location.href='main-page';
}
public LoggedIn():boolean{
  return localStorage.getItem(LocalStorageHelper.tokenKey)!=null;
}
}
