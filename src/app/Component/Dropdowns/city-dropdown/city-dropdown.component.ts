import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as turkey from 'turkey-neighbourhoods';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.css'],
  standalone:true,
  imports:[MatInputModule,MatFormFieldModule,MatSelectModule,CommonModule]

})
export class CityDropdownComponent {
  ngOnInit(){

  }
  @Input() defaultValue!:string|undefined;
  @Output() cityValueChange = new EventEmitter<string>();
  public cities=turkey.getCities();
  public onChange(event:any){
    //event.value:{code:any,name:string}
    //code is city code and name is city name
    this.cityValueChange.emit(event.value)
  }
}
