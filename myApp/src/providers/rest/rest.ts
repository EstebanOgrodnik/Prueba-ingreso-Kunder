import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class RestProvider {

  	apiUrl2 = '/product';

  	constructor(public http: HttpClient) {
  		console.log('Hello RestProvider Provider');
  	}

  	getProduct() {
  		return new Promise(resolve => {
  			this.http.get(this.apiUrl2).subscribe(data => {
  				resolve(data);
  			}, err => {
  				console.log(err);
  			});
  		});
  	}

  }
