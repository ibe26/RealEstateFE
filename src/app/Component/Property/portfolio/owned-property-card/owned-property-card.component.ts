import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { OwnedProperty } from 'src/app/Model/OwnedProperty';
import { Photo } from 'src/app/Model/Photo';
import { OwnedPropertyService } from 'src/app/Service/owned-property.service';
import alertify from 'alertifyjs';
import { EditOwnedPropertyComponent } from '../edit-owned-property/edit-owned-property.component';

@Component({
  selector: 'app-owned-property-card',
  templateUrl: './owned-property-card.component.html',
  styleUrls: ['./owned-property-card.component.css'],
  standalone:true,
  imports:[MatCardModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    EditOwnedPropertyComponent]
})
export class OwnedPropertyCardComponent {


  @Input() ownedProperty!: OwnedProperty;

  private ownedPropertyService$=inject(OwnedPropertyService);

  public propertyPhoto!:Photo;
  public isHovered = false;

  ngOnInit(): void {
    this.ownedPropertyService$.imageGet(this.ownedProperty.propertyID).subscribe(photoList=>{
      this.propertyPhoto=photoList[0];
    })
  }

  public onDelete() {
    alertify.confirm('Confirm Deletion?', () => {
      this.ownedPropertyService$.delete(this.ownedProperty.propertyID).subscribe(() => {
        alertify.success(`Successfully Deleted Property Listing`);
        this.ownedPropertyService$.getList().subscribe(data=>{
          this.ownedPropertyService$.ownedPropertyList=data;
        });
      })
    }).set({ title: "Confirm action" });
    }
}
