import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as turkey from 'turkey-neighbourhoods';

@Component({
  selector: 'app-district-dropdown',
  templateUrl: './district-dropdown.component.html',
  styleUrls: ['./district-dropdown.component.css'],
  standalone:true,
  imports:[MatInputModule,MatFormFieldModule,MatSelectModule,CommonModule]

})
export class DistrictDropdownComponent {
  
  @Input() defaultValue!:string|undefined;
  @Input() cityName:string|undefined;
  @Output() districtValueChange = new EventEmitter<string>();

  private cityCode:any;
  public districts:any;
  
  ngOnChanges(){
    if(this.cityName!=undefined){
    this.cityCode=turkey.getCities().find(c=>c.name.toString().toLowerCase()==this.cityName!.toString().toLowerCase())!.code;
    this.districts=turkey.getDistrictsByCityCode(this.cityCode);
    }
    
  }
  public onChange(event:any){
    this.districtValueChange.emit(event.value)
  }

}
