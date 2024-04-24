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
import { Property, PropertyDTO } from 'src/app/Model/Property';
import { UserService } from 'src/app/Service/user.service';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepper, CdkStepperModule} from '@angular/cdk/stepper';


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
    MatSelectModule,
    MatStepperModule,
    CdkStepperModule
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
        this.BasicInfoForm.controls['userID'].setValue(userID.value);
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


  public BasicInfoForm:FormGroup=this.formBuilder.group({
    propertyName: [null, [Validators.required]],
    propertyTypeID: [null, [Validators.required]],
    propertyListingTypeID: [null, [Validators.required]],
    bedroomCount: [null, [Validators.required]],
    bathroomCount: [null, [Validators.required]],
    balcony: [null, [Validators.required]],
    heatSystem: [null, [Validators.required]],
    builtYear: [null, [Validators.required]],
    description: [null],
    onListing:[true],
    floor: [null],
    totalFloor: [null],
    userID:[null,[Validators.required]],
  })

  public PricingAndAreaForm:FormGroup=this.formBuilder.group({
    grossArea: [null, [Validators.required]],
    netArea: [null, [Validators.required]],
    dues: [null, [Validators.required]],
    propertyPrice: [null, [Validators.required]],
  })

  public AddressForm:FormGroup=this.formBuilder.group({
    city: [undefined, [Validators.required]],
    district: [undefined, [Validators.required]],
    quarter: [undefined, [Validators.required]],
  })

  
  public onTypeChange($event: number) {
    this.BasicInfoForm.controls['propertyTypeID'].setValue($event);
  }
  public onListingTypeChange($event: number) {
    this.BasicInfoForm.controls['propertyListingTypeID'].setValue($event);
    this.currentPropertyListingType = this.propertyListingTypes.find(lpt => lpt.propertyListingTypeID === $event)?.propertyListingTypeName!;

  }
  public onCityChange($event: string) {
    this.AddressForm.controls['city'].setValue($event);
    this.AddressForm.controls['district'].setValue(undefined);
    this.AddressForm.controls['quarter'].setValue(undefined);
  }
  public onDistrictChange($event: string) {
    this.AddressForm.controls['district'].setValue($event);
    this.AddressForm.controls['quarter'].setValue(undefined);
  }
  public onQuarterChange($event: string) {
    this.AddressForm.controls['quarter'].setValue($event);
  }
  public onHeatSystemsChange($event: string) {
    this.BasicInfoForm.controls['heatSystem'].setValue($event);
  }
  public onSubmit() {
 
    if (this.AddressForm.valid) {
        const propertyDto: PropertyDTO = {
          propertyName: this.BasicInfoForm.get('propertyName')?.value,
          userID: this.BasicInfoForm.get('userID')?.value,
          city: this.AddressForm.get('city')?.value,
          district: this.AddressForm.get('district')?.value,
          quarter:this.AddressForm.get('quarter')?.value,
          propertyTypeID: this.BasicInfoForm.get('propertyTypeID')?.value,
          propertyListingTypeID: this.BasicInfoForm.get('propertyListingTypeID')?.value,
          bedroomCount: this.BasicInfoForm.get('bedroomCount')?.value,
          bathroomCount: this.BasicInfoForm.get('bathroomCount')?.value,
          balcony: this.BasicInfoForm.get('balcony')?.value,
          heatSystem: this.BasicInfoForm.get('heatSystem')?.value,
          builtYear: this.BasicInfoForm.get('builtYear')?.value,
          description: this.BasicInfoForm.get('description')?.value,
          onListing: this.BasicInfoForm.get('onListing')?.value,
          floor: this.BasicInfoForm.get('floor')?.value,
          totalFloor: this.BasicInfoForm.get('totalFloor')?.value,
          dateListed:new Date(),
          grossArea: this.PricingAndAreaForm.get('grossArea')?.value,
          netArea: this.PricingAndAreaForm.get('netArea')?.value,
          dues: this.PricingAndAreaForm.get('dues')?.value,
          propertyPrice: this.PricingAndAreaForm.get('propertyPrice')?.value,
        
      };
      alertify.confirm('Confirm Listing? (Adding images will be done after listing in the following page.)', () => {
        this.propertyService.post(propertyDto).subscribe((property: Property) => {
          alertify.success(`Successfully Listed Property`);
          this.router.navigate([`edit-property/${property.propertyID}`]);
        })
      }).set({ title: "Confirm action" });
    }
  }

  public get IsBasicFormValid(): boolean {
    return this.BasicInfoForm.get('propertyName')?.valid! &&
      this.BasicInfoForm.get('propertyTypeID')?.valid! &&
      this.BasicInfoForm.get('propertyListingTypeID')?.valid! &&
      this.BasicInfoForm.get('bedroomCount')?.valid! &&
      this.BasicInfoForm.get('bathroomCount')?.valid! &&
      this.BasicInfoForm.get('balcony')?.valid! &&
      this.BasicInfoForm.get('builtYear')?.valid! &&
      this.BasicInfoForm.get('heatSystem')?.valid!
  }
  public get IsPricingFormValid(): boolean {
    return this.PricingAndAreaForm.get('propertyPrice')?.valid! &&
      this.PricingAndAreaForm.get('grossArea')?.valid! &&
      this.PricingAndAreaForm.get('netArea')?.valid! &&
      this.PricingAndAreaForm.get('dues')?.valid!
  }


}
