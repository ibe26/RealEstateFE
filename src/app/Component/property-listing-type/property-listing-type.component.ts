import { Component, inject } from '@angular/core';
import { PropertyListingTypeService } from 'src/app/Service/property-listing-type.service';

@Component({
  selector: 'app-property-listing-type',
  templateUrl: './property-listing-type.component.html',
  styleUrls: ['./property-listing-type.component.css']
})
export class PropertyListingTypeComponent {
  _propertyListingTypeService=inject(PropertyListingTypeService)
  constructor(){
    this._propertyListingTypeService.getList().subscribe((data)=>{
      console.log(data);
    })
  }
}
