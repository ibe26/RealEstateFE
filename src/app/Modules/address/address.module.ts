import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityDropdownComponent } from 'src/app/Component/Dropdowns/city-dropdown/city-dropdown.component';
import { DistrictDropdownComponent } from 'src/app/Component/Dropdowns/district-dropdown/district-dropdown.component';
import { QuarterDropdownComponent } from 'src/app/Component/Dropdowns/quarter-dropdown/quarter-dropdown.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CityDropdownComponent,
    DistrictDropdownComponent,
    QuarterDropdownComponent
  ],
  exports:[
    CityDropdownComponent,
    DistrictDropdownComponent,
    QuarterDropdownComponent
  ]
})
export class AddressModule { }
