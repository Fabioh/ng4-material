import { Component } from '@angular/core';
import { ImageService } from './providers/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myData: any[];
  loading: boolean = false;

  constructor (private imageService: ImageService) {
    this.loadImages();
  }

  private loadImages() {
    this.loading = true;
    this.imageService.loadImages().then((result: any[]) => {
      this.myData = result;
      this.loading = false;
    });
  }
}
