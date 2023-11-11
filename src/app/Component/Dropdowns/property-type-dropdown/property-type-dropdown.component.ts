import { Component, EventEmitter, Input, Output } from '@angular/core';
import { inject } from '@angular/core';
import { PropertyTypeService } from 'src/app/Service/property-type.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-type-dropdown',
  templateUrl: './property-type-dropdown.component.html',
  styleUrls: ['./property-type-dropdown.component.css'],
  standalone:true,
  imports:[MatInputModule,MatFormFieldModule,MatSelectModule,CommonModule]
})
export class PropertyTypeDropdownComponent {

  @Input() defaultValue!:number|undefined;
  @Output() PropertyTypeID = new EventEmitter<number>();


  private _propertyTypeService=inject(PropertyTypeService);

  public propertyTypes$=this._propertyTypeService.getList();

  public onChange(event:any){
    this.PropertyTypeID.emit(event.value)
  }
}
