import { Component, OnInit, inject } from '@angular/core';
import { PropertyService } from 'src/app/Service/property.service';
import { PropertyListComponent } from '../PropertyListing/property-list/property-list.component';
import { RouterModule } from '@angular/router';
import { Property } from 'src/app/Model/Property';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone:true,
  imports:[PropertyListComponent,RouterModule]
})
export class MainPageComponent implements OnInit{
  ngOnInit(): void {
    this._propertyService.getList().subscribe(propertyList=>{
      this.propertyList=propertyList;
    })
  }

  private _propertyService=inject(PropertyService);
  public propertyList!:Array<Property>;
}
