import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadernoProvider } from '../../providers/caderno/caderno';

/**
 * Generated class for the CadernoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caderno',
  templateUrl: 'caderno.html',
})
export class CadernoPage {
	nome:string;
	descricao:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private cadernoProvider:CadernoProvider) {
  	
  }
  registrar(){
  	this.cadernoProvider.adicionarCaderno(this.nome,this.descricao);
  	this.navCtrl.setRoot(HomePage);
  }
}
