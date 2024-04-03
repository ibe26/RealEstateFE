import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Property } from 'src/app/Model/Property';
import { UserService } from 'src/app/Service/user.service';
import { PropertyListComponent } from '../Property/PropertyListing/property-list/property-list.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PropertyService } from 'src/app/Service/property.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone:true,
  imports:[CommonModule,RouterModule,PropertyListComponent,MatCardModule, MatButtonModule]
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.propertyService.getList().subscribe(property=>{
      this.propertyList=property.filter(p=>p.userID==this.activatedRoute.snapshot.params['id']);
    })
  }

  private userService=inject(UserService);
  private propertyService=inject(PropertyService);
  private activatedRoute=inject(ActivatedRoute);
  public image!:any;
  public propertyList!:Array<Property>
}
