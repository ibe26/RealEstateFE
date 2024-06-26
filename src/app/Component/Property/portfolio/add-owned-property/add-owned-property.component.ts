import {Component, inject} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OwnedPropertyService } from 'src/app/Service/owned-property.service';
import { PropertyTypeDropdownComponent } from 'src/app/Component/Dropdowns/property-type-dropdown/property-type-dropdown.component';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-add-owned-property',
  templateUrl: './add-owned-property.component.html',
  styleUrls: ['./add-owned-property.component.css'],
  standalone: true,
  imports: [MatButtonModule,MatDialogModule]
})

export class AddOwnedPropertyComponent {

  private dialog=inject(MatDialog);
  openDialog() {
    const dialogRef = this.dialog.open(AddOwnedPropertyDialogContent);
  }
}

@Component({
  selector: 'add-owned-property-dialog-content',
  templateUrl: 'add-owned-property-dialog-content.html',
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
export class AddOwnedPropertyDialogContent {

  ngOnInit(): void {
    this.userService$.validateToken().subscribe(userID=>{
      if(userID){
        this.userID=userID.value;
        this.propertyForm.controls['userID'].setValue(this.userID);
      }
    })
    
  }

  private formBuilder = inject(FormBuilder);
  private ownedPropertyService$=inject(OwnedPropertyService);
  private userService$=inject(UserService);
  private userID!:string;

  public photoProperty=new FormData();

  public propertyForm:FormGroup=this.formBuilder.group({
    propertyName: [null, [Validators.required]],
    propertyTypeID: [null, [Validators.required]],
    userID:[null,[Validators.required]],
    grossArea: [null, [Validators.required]],
    netArea: [null, [Validators.required]],
    yield: [null, [Validators.required]],
    propertyPrice: [null, [Validators.required]],
  })

  public onTypeChange($event: number) {
    this.propertyForm.controls['propertyTypeID'].setValue($event);
  }

  public onSubmit():void{
    if(this.propertyForm.valid && this.photoProperty.get('formFile')){
      const ownedPropertyDTO=this.propertyForm.value;
      this.ownedPropertyService$.post(ownedPropertyDTO).subscribe(data=>{
        this.ownedPropertyService$.imagePost(this.photoProperty,data.propertyID).subscribe();
        this.ownedPropertyService$.getListByUser(this.userID).subscribe(data=>{
          this.ownedPropertyService$.ownedPropertyList=data;
          window.location.reload();
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
