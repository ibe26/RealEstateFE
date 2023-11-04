import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/Service/image.service';
import { PropertyService } from 'src/app/Service/property.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
  standalone: true,
	imports: [NgbCarouselModule, NgIf,CommonModule,MatTabsModule]
})
export class PropertyViewComponent {
onInit(){
  console.log(this.property$)
}
  private readonly _propertyService=inject(PropertyService);
  // private readonly _propertyTypeService=inject(PropertyTypeService);
  // private readonly _propertyListingTypeService=inject(PropertyListingTypeService);
  private readonly _imageService=inject(ImageService);
  private readonly activatedRoute=inject(ActivatedRoute)

  private readonly propertyID:number=this.activatedRoute.snapshot.params['id'];
  
  public readonly property$=this._propertyService.getById(this.propertyID);
  // public readonly propertyTypes$=this._propertyTypeService.getList();
  // public readonly propertyListingTypes$=this._propertyListingTypeService.getList();
	public readonly images$ = this._imageService.get(this.propertyID);



	
}
