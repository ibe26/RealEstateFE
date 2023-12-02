import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from 'src/app/Model/Property';
import { PropertyService } from 'src/app/Service/property.service';
import { PropertyListComponent } from '../property-list/property-list.component';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.css'],
  standalone:true,
  imports:[PropertyListComponent]
})
export class FilteredListComponent {

  public readonly filteredPropertyList$:Observable<Array<Property>>=of(JSON.parse(localStorage.getItem('filteredPropertyList')!));
}
