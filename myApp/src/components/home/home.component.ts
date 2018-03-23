import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 @Component({
 	selector: 'home',
 	templateUrl: 'home.html'
 })
 export class HomeComponent {
 	banner;
 	product;

 	constructor(public navCtrl: NavController, public restProvider: RestProvider) {
 		this.getProduct();
 	}

 	getProduct(){
 		this.restProvider.getProduct()
 		.then(data => {
 			this.banner = data;
 			this.product = this.banner.product;
 			console.log(this.product);
 		});
 	}
 }
