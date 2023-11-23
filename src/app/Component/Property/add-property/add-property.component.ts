import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CityDropdownComponent } from '../../Dropdowns/city-dropdown/city-dropdown.component';
import { DistrictDropdownComponent } from '../../Dropdowns/district-dropdown/district-dropdown.component';
import { PropertyListingTypeDropdownComponent } from
'../../Dropdowns/property-listing-type-dropdown/property-listing-type-dropdown.component';
import { PropertyTypeDropdownComponent } from '../../Dropdowns/property-type-dropdown/property-type-dropdown.component';
import { QuarterDropdownComponent } from '../../Dropdowns/quarter-dropdown/quarter-dropdown.component';
import { Router } from '@angular/router';
import { PropertyListingTypeService } from 'src/app/Service/property-listing-type.service';
import { PropertyListingType } from 'src/app/Model/PropertyListingType';

@Component({
selector: 'app-add-property',
templateUrl: './add-property.component.html',
styleUrls: ['./add-property.component.css'],
standalone: true,
imports: [MatToolbarModule,
MatButtonModule,
PropertyTypeDropdownComponent,
PropertyListingTypeDropdownComponent,
MatFormFieldModule,
MatInputModule,
FormsModule,
ReactiveFormsModule,
CommonModule,
MatRadioModule,
CityDropdownComponent,
DistrictDropdownComponent,
QuarterDropdownComponent,
MatTabsModule
]
})
export class AddPropertyComponent {
    
    ngOnInit():void{
        this.propertyListingTypeService.getList().subscribe((data:Array<PropertyListingType>)=>{
            this.propertyListingTypes=data;
        })
    }
private formBuilder=inject(FormBuilder);
public propertyListingTypeService=inject(PropertyListingTypeService);
private router=inject(Router);

private propertyListingTypes:Array<PropertyListingType>=[];
public currentPropertyListingType:string="sale";
public selectedIndex=0;
public PropertyForm:FormGroup=this.formBuilder.group({
propertyName:[null, [Validators.required]],
propertyTypeID:[null, [Validators.required]],
propertyListingTypeID:[null, [Validators.required]],
price:[null, [Validators.required]],
bedroomCount:[null, [Validators.required]],
bathroomCount:[null, [Validators.required]],
grossArea:[null, [Validators.required]],
netArea:[null, [Validators.required]],
city:[undefined],
district:[undefined],
quarter:[undefined],
dues:[null, [Validators.required]],
balcony:[null, [Validators.required]],
heatSystem:[null, [Validators.required]],
buildedYear:[null, [Validators.required]],
description:[null],
floor:[null],
totalFloor:[null]
})

public get IsBasicFormValid():boolean{
    return this.PropertyForm.get('propertyName')?.valid! &&
           this.PropertyForm.get('propertyTypeID')?.valid! &&
           this.PropertyForm.get('propertyListingTypeID')?.valid! &&
           this.PropertyForm.get('bedroomCount')?.valid! &&
           this.PropertyForm.get('bathroomCount')?.valid! &&
           this.PropertyForm.get('balcony')?.valid!
}

// public get propertyListingTypeName():string{
//     this.propertyListingTypeService.getList().
// }

public onTypeChange($event: number) {
this.PropertyForm.controls['propertyTypeID'].setValue($event);
}
public onListingTypeChange($event: number) {
this.PropertyForm.controls['propertyListingTypeID'].setValue($event);
this.currentPropertyListingType=this.propertyListingTypes.find(lpt=>lpt.propertyListingTypeID===$event)?.propertyListingTypeName!;


}
public onCityChange($event:string){
this.PropertyForm.controls['city'].setValue($event);
}
public onDistrictChange($event:string){
this.PropertyForm.controls['district'].setValue($event);
}
public onQuarterChange($event:string){
this.PropertyForm.controls['quarter'].setValue($event);
}
public onSubmit(){
  
}
}
