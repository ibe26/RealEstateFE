import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyService } from 'src/app/Service/property.service';
import {MatTabsModule} from '@angular/material/tabs';
import { YearPluralPipe } from 'src/app/Pipe/year-plural.pipe';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
  standalone: true,
	imports: [NgbCarouselModule, NgIf,CommonModule,MatTabsModule,YearPluralPipe]
})
export class PropertyViewComponent {
onInit(){
}
  private readonly _propertyService=inject(PropertyService);
  private readonly activatedRoute=inject(ActivatedRoute)

  private readonly propertyID:string=this.activatedRoute.snapshot.params['id'];
  
  public readonly property$=this._propertyService.getById(this.propertyID);
	public readonly images$ = this._propertyService.imageGet(this.propertyID);
  public currentYear=new Date().getFullYear();
	
}
