import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { Property, PropertyDTO } from 'src/app/Model/Property';
import { PropertyListingType } from 'src/app/Model/PropertyListingType';
import { AddressModule } from 'src/app/Modules/address/address.module';
import { PropertyTypesModule } from 'src/app/Modules/property-types/property-types.module';
import { PropertyListingTypeService } from 'src/app/Service/property-listing-type.service';
import { PropertyService } from 'src/app/Service/property.service';
import { HeatSystemsDropdownComponent } from '../../Dropdowns/heat-systems-dropdown/heat-systems-dropdown.component';
import alertify from 'alertifyjs';
import { Observable } from 'rxjs';
import { ImageService } from 'src/app/Service/image.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
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
  MatIconModule
  ]
})

export class EditPropertyComponent {

  
  ngOnInit():void{
    this.imageService.get(this.propertyID).subscribe(result=>this.imageService.photos=result)
    this.propertyListingTypeService.getList().subscribe((data:Array<PropertyListingType>)=>{
      this.propertyListingTypes=data;
      })
      const year=new Date().getFullYear();
      for (let index = 0; year-index >= 1900; index++) {
      this.yearList[index]=year-index;
      }
      this.property$.subscribe((property:Property)=>{
        this.PropertyForm=this.formBuilder.group({
          propertyName:         [property.propertyName, [Validators.required]],
          propertyTypeID:       [property.propertyType.propertyTypeID, [Validators.required]],
          propertyListingTypeID:[property.propertyListingType.propertyListingTypeID, [Validators.required]],
          propertyPrice:        [property.propertyPrice, [Validators.required]],
          bedroomCount:         [property.bedroomCount, [Validators.required]],
          bathroomCount:        [property.bathroomCount, [Validators.required]],
          grossArea:            [property.grossArea, [Validators.required]],
          netArea:              [property.netArea, [Validators.required]],
          city:                 [property.city, [Validators.required]],
          district:             [property.district, [Validators.required]],
          quarter:              [property.quarter, [Validators.required]],
          dues:                 [property.dues, [Validators.required]],
          balcony:              [property.balcony, [Validators.required]],
          heatSystem:           [property.heatSystem, [Validators.required]],
          builtYear:          [property.builtYear, [Validators.required]],
          description:          [property.description],
          floor:                [property.floor],
          totalFloor:           [property.totalFloor],
          userID:               [property.userID]
          })
          console.log(property.quarter)
          console.log(property.district)
      })
      }
    
      private formBuilder=inject(FormBuilder);
      private propertyListingTypeService=inject(PropertyListingTypeService);
      private propertyService=inject(PropertyService);
      public imageService=inject(ImageService);
      private router=inject(Router);
      private readonly activatedRoute=inject(ActivatedRoute)

        private readonly propertyID:number=this.activatedRoute.snapshot.params['id'];
        private propertyListingTypes:Array<PropertyListingType>=[];
        public readonly property$:Observable<Property>=this.propertyService.getById(this.propertyID);
        public currentPropertyListingType:string="sale";
        
        
        //selectedIndex is used for navigating throughout the tab.
        public selectedIndex=0;
        public yearList:Array<number>=[];
    
          public PropertyForm!:FormGroup;
    
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
          public onHeatSystemsChange($event:string){
          this.PropertyForm.controls['heatSystem'].setValue($event);
          }
          public onImageSelect($event:any){
            const files=$event.target.files;
            let formData=new FormData();
            for(let i=0;i<files.length;i++){
              if(!this.imageService.photos.find(p=>p.name==files[i].name))
              {
                const reader = new FileReader();
                  reader.readAsDataURL(files[i]);
                  reader.onload=(events:any)=>{
                    this.imageService.photos.push({
                      url:events.target.result,
                      name:files[i].name
                    })
                  }
                formData.append('formFile',files[i],files[i].name)
                this.imageService.post(formData,this.propertyID).subscribe();
              }
            }
            
          }
          public onSubmit(){
            if(this.PropertyForm.valid){
            
            this.propertyService.update(this.PropertyForm.value,this.propertyID).subscribe(() => {
            alertify.success(`Successfully Updated Property`);
            this.router.navigate(['main-page']);
            })
            }
          }
          public onImageDelete(imageName:string){
            this.imageService.delete(imageName,this.propertyID).subscribe(()=>{
              this.imageService.photos=this.imageService.photos.filter(p=>p.name!==imageName);
            })
          }
    
          public get IsBasicFormValid():boolean{
          return this.PropertyForm.get('propertyName')?.valid! &&
          this.PropertyForm.get('propertyTypeID')?.valid! &&
          this.PropertyForm.get('propertyListingTypeID')?.valid! &&
          this.PropertyForm.get('bedroomCount')?.valid! &&
          this.PropertyForm.get('bathroomCount')?.valid! &&
          this.PropertyForm.get('balcony')?.valid! &&
          this.PropertyForm.get('builtYear')?.valid! &&
          this.PropertyForm.get('heatSystem')?.valid!
          }
          public get IsPricingFormValid():boolean{
          return this.PropertyForm.get('propertyPrice')?.valid! &&
          this.PropertyForm.get('grossArea')?.valid! &&
          this.PropertyForm.get('netArea')?.valid! &&
          this.PropertyForm.get('dues')?.valid!
          }
}

