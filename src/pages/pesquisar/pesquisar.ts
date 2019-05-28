import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadernoProvider } from '../../providers/caderno/caderno';

/**
 * Generated class for the PesquisarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html',
})
export class PesquisarPage {

	tags:string[] = [];
	itens:string[] = [];
	pagina:number[] = [];
	chavePesquisa:string = "";
 	indiceBook:number;
  	constructor(public navCtrl: NavController, public navParams: NavParams, private cadernoProvider:CadernoProvider) {
  		this.indiceBook = this.cadernoProvider.paginaDaVez;
      let k=0;
      for(let i =0; i< Object.keys(this.cadernoProvider.cadernos[this.indiceBook].paginas).length;i++){
        this.tags[k] = this.cadernoProvider.cadernos[this.indiceBook].paginas[i].tag;
        k++;
      }
  	}
  	pesquisar(){
  		this.itens = [];
  		this.pagina = [];
  		let k =0;
  		if(this.chavePesquisa == "")
  			return;
  		for(let i = 0; i< Object.keys(this.tags).length;i++){
  			if(((this.tags[i]).toLowerCase()).indexOf(this.chavePesquisa.toLowerCase()) > -1){
  				this.itens[k] = this.tags[i];
  				this.pagina[k] = i;
  				k++;
  			}
  		}
  	}
}
