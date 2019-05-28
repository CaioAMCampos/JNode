import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CadernoProvider } from '../../providers/caderno/caderno';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaginaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-pagina',
  templateUrl: 'pagina.html',
})
export class PaginaPage {
	conteudo:string[] = [];
	tipo:string[] = [];
	tag:string = '';
	qt:number = 0;
	nomePagina:string;
	numeroPagina:number;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public cadernoProvider:CadernoProvider){
  		this.numeroPagina = cadernoProvider.numeroPagina;
  		this.nomePagina = this.cadernoProvider.cadernos[cadernoProvider.paginaDaVez].paginas[this.numeroPagina].nome;
  		this.conteudo = this.cadernoProvider.cadernos[cadernoProvider.paginaDaVez].paginas[this.numeroPagina].conteudo;
  		this.tipo = this.cadernoProvider.cadernos[cadernoProvider.paginaDaVez].paginas[this.numeroPagina].tipo;
  		this.tag = this.cadernoProvider.cadernos[cadernoProvider.paginaDaVez].paginas[this.numeroPagina].tag;
  		this.qt = this.cadernoProvider.cadernos[cadernoProvider.paginaDaVez].paginas[this.numeroPagina].qt;
  	}
  	inserirImagem(valor:string){
  		this.conteudo[this.qt] = valor;
  		this.tipo[this.qt] = "imagem";
  		this.qt++;
  	}
  	inserirAudio(valor:string){
  		this.conteudo[this.qt] = valor;
  		this.tipo[this.qt] = "audio";
  		this.qt++;
  	}
  	inserirVideo(valor:string){
		this.conteudo[this.qt] = valor;
  		this.tipo[this.qt] = "video";
  		this.qt++;
  	}
  	inserirLink(valor:string){
  		this.conteudo[this.qt] = valor;
  		this.tipo[this.qt] = "link";
  		this.qt++;
  	}
  	inserirTexto(){
  		this.conteudo[this.qt] = "";
  		this.tipo[this.qt] = "texto";
  		this.qt++;	
  	}
  	inserirTag(){
  		let alert = this.alertCtrl.create();
   		alert.setTitle('Adicionar Tag');
   		alert.setSubTitle('Qual o identificador dessa página?');
   		alert.addInput({
     	name:'nome',
     	type: 'Title',
     	placeholder: 'Tag'
   		});
   		alert.addButton('Cancelar')
   		alert.addButton({
     	text:'Confirmar',
     	handler:data =>{this.tag = data.nome}
     	})
   		alert.present(); 
  	}
  	compartilhar(){
		let alert = this.alertCtrl.create();
   		alert.setTitle('Compartilhar Página');
   		alert.setSubTitle('Digite o usuário do JNode no qual deseja compartilhar');
   		alert.addInput({
     	name:'user',
     	type: 'Title',
     	placeholder: 'Usuário'
   		});
   		alert.addButton('Cancelar')
   		alert.addButton('Confirmar')
   		alert.present();
  	}
  	salvar(){
  		this.cadernoProvider.preencherPagina(this.tag,this.conteudo,this.tipo,this.qt);
  		this.navCtrl.setRoot(HomePage);
  	}
}
