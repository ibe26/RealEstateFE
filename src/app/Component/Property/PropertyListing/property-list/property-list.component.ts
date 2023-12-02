import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from 'src/app/Model/Property';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { LoadingScreenComponent } from 'src/app/Component/loading-screen/loading-screen.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  standalone:true,
  imports:[MatPaginatorModule,PropertyCardComponent,LoadingScreenComponent,CommonModule]
})
export class PropertyListComponent{
@Input() propertyList$:Observable<Array<Property>> | undefined;
  
}
