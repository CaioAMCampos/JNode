import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	username:string = '';
	senha:string = '';
	user:string;
	password:string;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  		this.user = "jnote";
  		this.password = "jnote";
  	}
    teste(){
      console.log("ola");
    } 
  	validarLogin(){
  		if(this.username == this.user && this.senha == this.password){
  			this.navCtrl.setRoot(HomePage); 
  		}
  	} 
  	cadastrar(){
  		this.navCtrl.push(CadastroPage); 
  	}

}
