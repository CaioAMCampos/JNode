import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MenuController } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadernoProvider } from '../providers/caderno/caderno';
import { PesquisarPage } from '../pages/pesquisar/pesquisar';
import {PaginaPage} from '../pages/pagina/pagina';
import { AlertController } from 'ionic-angular';
import {CadernoPage} from '../pages/caderno/caderno';
import {QrcodePage} from '../pages/qrcode/qrcode';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    PesquisarPage,
    PaginaPage,
    CadernoPage,
    QrcodePage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    PesquisarPage,
    PaginaPage,
    CadernoPage,
    QrcodePage
  ],
  providers: [
    StatusBar, 
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadernoProvider,
    AlertController,
    QRScanner
  ]
})
export class AppModule {}
