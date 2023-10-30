import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from 'src/app/Model/Property';
import { ImageService } from 'src/app/Service/image.service';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  @Input() property!:Property;
ngOnInit():void{
  console.log(this.property)
  this.images$=this._imageService.get(1);
  console.log(this.images$)

  this.images$.subscribe(data=>{
    console.log(data)
  })
}
  private _imageService=inject(ImageService);
  public images$!:Observable<Array<string>>;

}
