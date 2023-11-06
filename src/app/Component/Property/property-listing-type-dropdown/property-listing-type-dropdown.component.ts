import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PropertyListingTypeService } from 'src/app/Service/property-listing-type.service';

@Component({
  selector: 'app-property-listing-type-dropdown',
  templateUrl: './property-listing-type-dropdown.component.html',
  styleUrls: ['./property-listing-type-dropdown.component.css'],
  standalone:true,
  imports:[MatDatepickerModule,MatInputModule,MatFormFieldModule,MatSelectModule,CommonModule]
})
export class PropertyListingTypeDropdownComponent {

  @Input() defaultValue!:number|undefined;
  @Output() PropertyListingTypeID = new EventEmitter<number>();


  private _propertyTypeListingService=inject(PropertyListingTypeService);

  public propertyListingTypes$=this._propertyTypeListingService.getList();

  
  public onChange(event:any){

    console.log(event.value)
    this.PropertyListingTypeID.emit(event.value)
  }
}
