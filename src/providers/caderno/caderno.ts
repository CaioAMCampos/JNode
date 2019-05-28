import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CadernoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadernoProvider {
  tipozitcho:number = 0;
	cadernos:{
		descricao:string;
		titulo:string;
		numeroPaginas:number;
		paginas:{
			nome:string;
			tag:string;
			conteudo:any[];
			tipo:any[];
			qt:number;
		}[];
	}[]=[];
	paginaDaVez:number = 0;
	numeroPagina:number = 0;
  	constructor() {
  		let pagina:{
  			nome:string,
  			tag:string;
			conteudo:any[];
			tipo:any[];
			qt:number;
  		}[] = [{nome:"",tag:"",conteudo:[],tipo:[],qt:0}];
 		this.cadernos.push({descricao:"Caderno de Biologia 1 Ano EM",titulo:"Biologia", numeroPaginas:0,paginas:pagina});
 		this.cadernos.push({descricao:"Caderno de Matemática 1 Ano EM",titulo:"Matemática", numeroPaginas:0,paginas:pagina});
 		this.cadernos.push({descricao:"Caderno de Geografia 1 Ano EM",titulo:"Geografia", numeroPaginas:0,paginas:pagina});
 		this.criarPagina(0,"Pagina 1");
  	}
  	criarPagina(indice:number,nomePagina:string){
  		let pagina:{
  			nome:string,
  			tag:string;
			conteudo:any[];
			tipo:any[];
			qt:number;
  		} = {nome:nomePagina,tag:"",conteudo:[],tipo:[],qt:0};
  		this.cadernos[indice].paginas = [];
  		this.cadernos[indice].paginas[this.cadernos[indice].numeroPaginas] = pagina;
  		this.cadernos[indice].numeroPaginas ++;
  	}
  	preencherPagina(tag:string, conteudo:any[],tipo:any[],qt:number){
  		this.cadernos[this.paginaDaVez].paginas[this.numeroPagina].tag = tag;
  		this.cadernos[this.paginaDaVez].paginas[this.numeroPagina].conteudo = conteudo;
  		this.cadernos[this.paginaDaVez].paginas[this.numeroPagina].tipo = tipo;
  		this.cadernos[this.paginaDaVez].paginas[this.numeroPagina].qt = qt;
  	}
    adicionarCaderno(nome:string, descricao:string){
      let pagina:{
        nome:string,
        tag:string;
      conteudo:any[];
      tipo:any[];
      qt:number;
      }[] = [{nome:"",tag:"",conteudo:[],tipo:[],qt:0}];
      this.cadernos.push({descricao:descricao,titulo:nome, numeroPaginas:0,paginas:pagina});
    }
}
