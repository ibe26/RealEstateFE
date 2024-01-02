import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { PropertyListingTypeService } from 'src/app/Service/property-listing-type.service';
import { PropertyListingType } from 'src/app/Model/PropertyListingType';
import { HeatSystemsDropdownComponent } from '../../Dropdowns/heat-systems-dropdown/heat-systems-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { AddressModule } from 'src/app/Modules/address/address.module';
import { PropertyTypesModule } from 'src/app/Modules/property-types/property-types.module';
import alertify from 'alertifyjs';
import { PropertyService } from 'src/app/Service/property.service';
import { Property } from 'src/app/Model/Property';
import { LocalStorageHelper } from 'src/app/API';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule,
    AddressModule,
    PropertyTypesModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatTabsModule,
    HeatSystemsDropdownComponent,
    MatSelectModule
  ]
})
export class AddPropertyComponent {

  ngOnInit(): void {
    this.propertyListingTypeService.getList().subscribe((data: Array<PropertyListingType>) => {
      this.propertyListingTypes = data;
    })
    const year = new Date().getFullYear();
    for (let index = 0; year - index >= 1900; index++) {
      this.yearList[index] = year - index;
    }
    this.userService.validateToken().subscribe(userID=>{
      if(userID){
        this.PropertyForm.controls['userID'].setValue(userID);
      }
    })
  }

  private formBuilder = inject(FormBuilder);
  private propertyListingTypeService = inject(PropertyListingTypeService);
  private propertyService = inject(PropertyService);
  private userService=inject(UserService);
  private router = inject(Router);

  private propertyListingTypes: Array<PropertyListingType> = [];
  public currentPropertyListingType: string = "sale";
  public selectedIndex = 0;
  public yearList: Array<number> = [];

  public PropertyForm: FormGroup = this.formBuilder.group({
    propertyName: [null, [Validators.required]],
    propertyTypeID: [null, [Validators.required]],
    propertyListingTypeID: [null, [Validators.required]],
    propertyPrice: [null, [Validators.required]],
    bedroomCount: [null, [Validators.required]],
    bathroomCount: [null, [Validators.required]],
    grossArea: [null, [Validators.required]],
    netArea: [null, [Validators.required]],
    dues: [null, [Validators.required]],
    balcony: [null, [Validators.required]],
    heatSystem: [null, [Validators.required]],
    builtYear: [null, [Validators.required]],
    city: [undefined, [Validators.required]],
    district: [undefined, [Validators.required]],
    quarter: [undefined, [Validators.required]],
    userID:[null,[Validators.required]],
    description: [null],
    floor: [null],
    totalFloor: [null]
  })

  public onTypeChange($event: number) {
    this.PropertyForm.controls['propertyTypeID'].setValue($event);
  }
  public onListingTypeChange($event: number) {
    this.PropertyForm.controls['propertyListingTypeID'].setValue($event);
    this.currentPropertyListingType = this.propertyListingTypes.find(lpt => lpt.propertyListingTypeID === $event)?.propertyListingTypeName!;

  }
  public onCityChange($event: string) {
    this.PropertyForm.controls['city'].setValue($event);
    this.PropertyForm.controls['district'].setValue(undefined);
    this.PropertyForm.controls['quarter'].setValue(undefined);
  }
  public onDistrictChange($event: string) {
    this.PropertyForm.controls['district'].setValue($event);
    this.PropertyForm.controls['quarter'].setValue(undefined);
  }
  public onQuarterChange($event: string) {
    this.PropertyForm.controls['quarter'].setValue($event);
  }
  public onHeatSystemsChange($event: string) {
    this.PropertyForm.controls['heatSystem'].setValue($event);
  }
  public onSubmit() {
 
    if (this.PropertyForm.valid) {
      alertify.confirm('Confirm Listing? (Adding images will be done after listing in the following page.)', () => {
        this.propertyService.post(this.PropertyForm.value).subscribe((property: Property) => {
          alertify.success(`Successfully Listed Property`);
          this.router.navigate([`edit-property/${property.propertyID}`]);
        })
      }).set({ title: "Confirm action" });
    }
  }

  public get IsBasicFormValid(): boolean {
    return this.PropertyForm.get('propertyName')?.valid! &&
      this.PropertyForm.get('propertyTypeID')?.valid! &&
      this.PropertyForm.get('propertyListingTypeID')?.valid! &&
      this.PropertyForm.get('bedroomCount')?.valid! &&
      this.PropertyForm.get('bathroomCount')?.valid! &&
      this.PropertyForm.get('balcony')?.valid! &&
      this.PropertyForm.get('builtYear')?.valid! &&
      this.PropertyForm.get('heatSystem')?.valid!
  }
  public get IsPricingFormValid(): boolean {
    return this.PropertyForm.get('propertyPrice')?.valid! &&
      this.PropertyForm.get('grossArea')?.valid! &&
      this.PropertyForm.get('netArea')?.valid! &&
      this.PropertyForm.get('dues')?.valid!
  }


}
