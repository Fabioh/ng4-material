import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageService {

  private apiRoot = 'https://jsonplaceholder.typicode.com/photos';
  private results: any[];
  private loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }


  public loadImages() {
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.apiRoot;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results = res.json();
            this.results.map((value, index) => {
              value.url = value.url.replace('http://', 'https://');
              value.thumbnailUrl = value.thumbnailUrl.replace('http://', 'https://');
            });
            this.results = this.results.slice(0, 10);
            resolve(this.results);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

}
