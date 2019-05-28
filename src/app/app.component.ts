import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import {PaginaPage} from '../pages/pagina/pagina';
import {CadernoPage} from '../pages/caderno/caderno';
import {QrcodePage} from '../pages/qrcode/qrcode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}