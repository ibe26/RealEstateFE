import { Component, inject } from '@angular/core';
import { PropertyService } from 'src/app/Service/property.service';
import { PropertyListComponent } from '../PropertyListing/property-list/property-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone:true,
  imports:[PropertyListComponent]
})
export class MainPageComponent {

  private _propertyService=inject(PropertyService);
  public propertyList$=this._propertyService.getList();
}
