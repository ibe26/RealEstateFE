import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as turkey from 'turkey-neighbourhoods';


@Component({
  selector: 'app-quarter-dropdown',
  templateUrl: './quarter-dropdown.component.html',
  styleUrls: ['./quarter-dropdown.component.css'],
  standalone:true,
  imports:[MatInputModule,MatFormFieldModule,MatSelectModule,CommonModule]

})
export class QuarterDropdownComponent {

  
  @Input() defaultValue!:string|undefined;
  @Input() cityNameAndDistrict:{city:string,district:string}|undefined;
  @Output() quarterValueChange = new EventEmitter<string>();

  private cityCode:any;
  public quarters!:string[];
  ngOnChanges(){
    this.quarterValueChange.emit(undefined)
    console.log(this.cityNameAndDistrict)
    if(this.cityNameAndDistrict!==undefined){
    this.cityCode=turkey.getCities().find(c=>c.name.toString().toLowerCase()==this.cityNameAndDistrict!.city.toString().toLowerCase())!.code;
    this.quarters=turkey.getNeighbourhoodsByCityCodeAndDistrict(this.cityCode,this.cityNameAndDistrict.district);
    }
    
  }

  public onChange(event:any){

    this.quarterValueChange.emit(event.value)
  }

}

