import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/Service/image.service';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css'],
  standalone: true,
	imports: [NgbCarouselModule, NgIf,CommonModule]
})
export class PropertyViewComponent {
  private _imageService=inject(ImageService);
  private readonly propertyID:number=inject(ActivatedRoute).snapshot.params['id'];
	public images$ = this._imageService.get(this.propertyID);

	
}
