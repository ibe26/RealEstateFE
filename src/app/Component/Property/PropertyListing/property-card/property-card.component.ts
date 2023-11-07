import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from 'src/app/Model/Property';
import { ImageService } from 'src/app/Service/image.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  standalone:true,
  imports:[MatButtonModule,CommonModule,RouterModule ]
})
export class PropertyCardComponent implements OnInit {
  @Input() property!:Property;
ngOnInit():void{
  this.images$=this._imageService.get(1);
  
}
  private _imageService=inject(ImageService);
  public images$!:Observable<Array<string>>;
  public isHovered=false;

}
