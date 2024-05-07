import { Component, Inject, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PropertyTypeDropdownComponent } from 'src/app/Component/Dropdowns/property-type-dropdown/property-type-dropdown.component';
import { OwnedPropertyService } from 'src/app/Service/owned-property.service';
import { UserService } from 'src/app/Service/user.service';
import { OwnedProperty } from 'src/app/Model/OwnedProperty';
import { Photo } from 'src/app/Model/Photo';

@Component({
  selector: 'app-edit-owned-property',
  templateUrl: './edit-owned-property.component.html',
  styleUrls: ['./edit-owned-property.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatDialogModule]
})
export class EditOwnedPropertyComponent {
  @Input() isHovered!:boolean;
  @Input() OwnedProperty!:OwnedProperty;
  private dialog=inject(MatDialog);
  openDialog() {
    const dialogRef = this.dialog.open(EditOwnedPropertyDialogContent, {
      data: { ownedProperty: this.OwnedProperty }})
  }
}

@Component({
  selector: 'edit-owned-property-dialog-content',
  templateUrl: 'edit-owned-property-dialog-content.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    PropertyTypeDropdownComponent
  ],
})
export class EditOwnedPropertyDialogContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { ownedProperty: OwnedProperty }){}
  
  ngOnInit(): void {
    
  }

  private formBuilder = inject(FormBuilder);
  private ownedPropertyService$=inject(OwnedPropertyService);

  public photoProperty=new FormData();

  public propertyForm:FormGroup=this.formBuilder.group({
    propertyName:   [this.data.ownedProperty.propertyName, [Validators.required]],
    propertyTypeID: [this.data.ownedProperty.propertyTypeID, [Validators.required]],
    userID:         [this.data.ownedProperty.userID,[Validators.required]],
    grossArea:      [this.data.ownedProperty.grossArea, [Validators.required]],
    netArea:        [this.data.ownedProperty.netArea, [Validators.required]],
    yield:          [this.data.ownedProperty.yield, [Validators.required]],
    propertyPrice:  [this.data.ownedProperty.propertyPrice, [Validators.required]],
  })

  public onTypeChange($event: number) {
    this.propertyForm.controls['propertyTypeID'].setValue($event);
  }

  public onSubmit():void{
    if(this.propertyForm.valid){
      const ownedPropertyDTO=this.propertyForm.value;
      this.ownedPropertyService$.update(ownedPropertyDTO,this.data.ownedProperty.propertyID).subscribe(data=>{
        if(this.photoProperty.get('formFile')){
          this.ownedPropertyService$.imagePost(this.photoProperty,this.data.ownedProperty.propertyID).subscribe(data=>{
            window.location.reload();
          });
        }
        this.ownedPropertyService$.getList().subscribe(data=>{
          this.ownedPropertyService$.ownedPropertyList=data;
        })
      })
    }
  }

  public onImageSelect($event:any){
    const file=$event.target.files[0];
      if(file)
      {
        this.photoProperty.append('formFile',file,file.name)
      }
    
  }
}
