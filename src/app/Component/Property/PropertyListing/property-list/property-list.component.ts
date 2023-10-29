import { Component} from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from 'src/app/Model/Property';
import { PropertyService } from 'src/app/Service/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent{

  public _propertyService=inject(PropertyService);
  public propertyList$:Observable<Array<Property>>=this._propertyService.getList();

}
