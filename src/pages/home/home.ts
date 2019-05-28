import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadernoProvider } from '../../providers/caderno/caderno';
import { PesquisarPage } from '../pesquisar/pesquisar';
import { PaginaPage } from '../pagina/pagina';
import { CadernoPage } from '../caderno/caderno';
import { QrcodePage } from '../qrcode/qrcode';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	cadernos:{
		aberto:boolean;
		descricao:string;
		titulo:string;
		numeroPaginas:number;
	}[]=[];

  constructor(public navCtrl: NavController,private cadernoProvider:CadernoProvider, private qrScanner: QRScanner) {
  	for(let i=0; i<Object.keys(cadernoProvider.cadernos).length;i++){
  		this.cadernos.push({aberto:false,descricao:cadernoProvider.cadernos[i].descricao,titulo:cadernoProvider.cadernos[i].titulo, numeroPaginas:cadernoProvider.cadernos[i].numeroPaginas});
  	}
  }
  teste(indice:number){
  	this.cadernos[indice].aberto = !this.cadernos[indice].aberto;
  }
  pushPesquisa(i:number){
    this.cadernoProvider.paginaDaVez = i;
    this.navCtrl.push(PesquisarPage);
  }
  pushPagina(){
    this.cadernoProvider.tipozitcho = 1;
    this.navCtrl.push(QrcodePage);
  }
  adicionar(){
    this.cadernoProvider.tipozitcho = 0;
    this.navCtrl.push(QrcodePage);
  }
  
}
