import { Component, inject } from '@angular/core';
import { Property } from 'src/app/Model/Property';
import { PropertyListComponent } from '../property-list/property-list.component';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.css'],
  standalone:true,
  imports:[PropertyListComponent]
})
export class FilteredListComponent {

  public readonly filteredPropertyList:Array<Property>=JSON.parse(localStorage.getItem('filteredPropertyList')!);
}
