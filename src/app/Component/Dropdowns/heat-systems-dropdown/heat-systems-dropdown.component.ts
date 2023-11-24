import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-heat-systems-dropdown',
  templateUrl: './heat-systems-dropdown.component.html',
  styleUrls: ['./heat-systems-dropdown.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule,CommonModule],
})
export class HeatSystemsDropdownComponent {
  @Output() heatSystemsValueChange = new EventEmitter<string>();

  public readonly heatSystems:Array<string> = [
    "Furnace",
    "Boiler",
    "Heat Pump",
    "In-Floor Radiant",
    "Electric Resistance",
    "Baseboard Heater",
    "Electric Space Heater",
    "Active Solar Heating",
    "Hybrid Heating",
    "Gravity Air Furnace",
    "Other"
  ];

  public onChange(event:any){
    this.heatSystemsValueChange.emit(event.value)
  }
}

