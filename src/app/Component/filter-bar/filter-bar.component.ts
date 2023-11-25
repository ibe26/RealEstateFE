import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { PropertyService } from 'src/app/Service/property.service';
import { Router } from '@angular/router';
import { Property } from 'src/app/Model/Property';
import { AddressModule } from 'src/app/Modules/address/address.module';
import { PropertyTypesModule } from 'src/app/Modules/property-types/property-types.module';



@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css'],
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule,
    PropertyTypesModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AddressModule
  ],
})
export class FilterBarComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  private _propertyService=inject(PropertyService)
  private formBuilder=inject(FormBuilder);
  private router=inject(Router);

  public FilterForm:FormGroup=this.formBuilder.group({
    propertyName:[null],
    propertyTypeID:[0],
    propertyListingTypeID:[0],
    minPrice:[0],
    maxPrice:[0],
    bedroomCount:[0],
    city:[undefined],
    district:[undefined],
    quarter:[undefined],
    balcony:[null],
    heatSystem:[null],
  })
  

    public Submit():void{
      this._propertyService.getFilteredList(this.FilterForm.value).subscribe((data:Array<Property>)=>{
        localStorage.setItem('filteredPropertyList',JSON.stringify(data));
        if(this.router.url==='/filtered-list')
        {
          window.location.reload();
        }
        else this.router.navigate(['filtered-list']);

      })
    }

    public onTypeChange($event: number) {
      this.FilterForm.controls['propertyTypeID'].setValue($event);
    }
    public onListingTypeChange($event: number) {
      this.FilterForm.controls['propertyListingTypeID'].setValue($event);
    }
    public onCityChange($event:string){
      this.FilterForm.controls['city'].setValue($event);
    }
    public onDistrictChange($event:string){
      this.FilterForm.controls['district'].setValue($event);
    }
    public onQuarterChange($event:string){
      this.FilterForm.controls['quarter'].setValue($event);
    }
    
}
