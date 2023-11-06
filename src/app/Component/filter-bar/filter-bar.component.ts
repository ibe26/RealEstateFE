import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PropertyTypeDropdownComponent } from '../Property/property-type-dropdown/property-type-dropdown.component';
import { PropertyListingTypeDropdownComponent } from '../Property/property-listing-type-dropdown/property-listing-type-dropdown.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule,
    PropertyTypeDropdownComponent,
    PropertyListingTypeDropdownComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
})
export class FilterBarComponent {

  // propertyName:string ,
  //   propertyTypeID:number,
  //   propertyListingTypeID:number,
  //   minPrice :number,
  //   maxPrice :number,
  //   bedroomCount:number 
  //   city :string ,
  //   district :string ,
  //   quarter:string,
  //   timeFilter:number,
  //   balcony:boolean,
  //   heatSystem:string,

  private formBuilder=inject(FormBuilder);
  public FilterForm:FormGroup=this.formBuilder.group({
    propertyName:[null],
    propertyTypeID:[0],
    propertyListingTypeID:[0],
    minPrice:[0],
    maxPrice:[0],
    bedroomCount:[0],
    city:[null],
    district:[null],
    quarter:[null],
    timeFilter:[null],
    balcony:[null],
    heatSystem:[null],

  })
  public onTypeChange($event: number) {
    this.FilterForm.controls['propertyTypeID'].setValue($event);
  }
  public onListingTypeChange($event: number) {
    this.FilterForm.controls['propertyListingTypeID'].setValue($event);
    }

}
