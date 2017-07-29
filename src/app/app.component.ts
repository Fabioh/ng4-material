import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ImageServiceService } from './providers/image-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // myData: Array<any>;
  loading: boolean = false;

  constructor (private imageService: ImageServiceService) {
    // this.http.get('https://jsonplaceholder.typicode.com/photos')
    //   .map(response => response.json())
    //   .subscribe(res => this.myData = res);
    // this.myData =  this.imageService.results;
    this.loadImages();
  }

  loadImages() {
    this.loading = true;
    this.imageService.loadImages().then( () => this.loading = false);
  }
}
