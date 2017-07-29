import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageServiceService {

  private apiRoot = 'https://jsonplaceholder.typicode.com/photos';
  results: Array<any>;
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }


  public loadImages() {
    let promise = new Promise((resolve, reject) => {
      const apiURL = this.apiRoot;
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.results = res.json().results;
            resolve();
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

}
