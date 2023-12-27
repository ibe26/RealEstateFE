import { Component, Input, OnInit, inject } from '@angular/core';
import { Property } from 'src/app/Model/Property';
import { ImageService } from 'src/app/Service/image.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { LocalStorageHelper } from 'src/app/API';
import { MatIconModule } from '@angular/material/icon';
import alertify from 'alertifyjs';
import { PropertyService } from 'src/app/Service/property.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterModule, MatIconModule]
})
export class PropertyCardComponent implements OnInit {

  @Input() property!: Property;
  ngOnInit(): void {
    this._imageService.get(this.property.propertyID).subscribe(images => {
      this.imageUrl = images[0].url;
    });
    const token = localStorage.getItem(LocalStorageHelper.tokenKey);
    if (token) {
      this._userService.validateToken().subscribe(data => {
        if (data === this.property.userID) {
          this.isUser = true;
        }
      })
    }
    else this.isUser = false;


  }
  private _imageService = inject(ImageService);
  private _propertyService=inject(PropertyService);
  private _userService = inject(UserService);
  public isHovered = false;
  public isUser!: boolean;
  public imageUrl!: string;

  public onDelete(): void {
    alertify.confirm('Confirm Deletion?', () => {
      this._propertyService.delete(this.property.propertyID).subscribe(() => {
        alertify.success(`Successfully Deleted Property Listing`);
        window.location.reload()
      })
    }).set({ title: "Confirm action" });
  }
  }

