import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyTypeDropdownComponent } from 'src/app/Component/Dropdowns/property-type-dropdown/property-type-dropdown.component';
import { PropertyListingTypeDropdownComponent } from 'src/app/Component/Dropdowns/property-listing-type-dropdown/property-listing-type-dropdown.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PropertyTypeDropdownComponent,
    PropertyListingTypeDropdownComponent
  ],
  exports:[
    PropertyTypeDropdownComponent,
    PropertyListingTypeDropdownComponent]
})
export class PropertyTypesModule { }
