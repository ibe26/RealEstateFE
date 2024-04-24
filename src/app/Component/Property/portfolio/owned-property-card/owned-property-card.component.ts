import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OwnedProperty } from 'src/app/Model/OwnedProperty';
import { Photo } from 'src/app/Model/Photo';
import { OwnedPropertyService } from 'src/app/Service/owned-property.service';

@Component({
  selector: 'app-owned-property-card',
  templateUrl: './owned-property-card.component.html',
  styleUrls: ['./owned-property-card.component.css'],
  standalone:true,
  imports:[MatCardModule,CommonModule]
})
export class OwnedPropertyCardComponent {

  @Input() ownedProperty!: OwnedProperty;

  private ownedPropertyService$=inject(OwnedPropertyService);

  public propertyPhoto!:Photo;

  ngOnInit(): void {
    this.ownedPropertyService$.imageGet(this.ownedProperty.propertyID).subscribe(photoList=>{
      this.propertyPhoto=photoList[0];
    })
  }
}
