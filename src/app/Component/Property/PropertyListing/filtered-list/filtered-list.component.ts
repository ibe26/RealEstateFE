import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from 'src/app/Model/Property';
import { PropertyService } from 'src/app/Service/property.service';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.css']
})
export class FilteredListComponent {

  public readonly filteredPropertyList$:Observable<Array<Property>>=of(JSON.parse(localStorage.getItem('filteredPropertyList')!));
}
