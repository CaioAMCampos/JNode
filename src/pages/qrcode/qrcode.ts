import { Component, Inject, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ToastController,Events} from 'ionic-angular';
import { App} from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { DOCUMENT } from '@angular/platform-browser';
import * as UglyQRScannerLibraryGlobalObject from '../../../plugins/cordova-plugin-qrscanner/dist/cordova-plugin-qrscanner-lib.min';
import { CadernoPage } from '../caderno/caderno';
import { PaginaPage } from '../pagina/pagina';
import { CadernoProvider } from '../../providers/caderno/caderno';

export class QRScannerStatus {
  authorized: boolean;
  denied: boolean;
  restricted: boolean;
  prepared: boolean;
  scanning: boolean;
  previewing: boolean;
  showing: boolean;
  lightEnabled: boolean;
  canOpenSettings: boolean;
  canEnableLight: boolean;
  canChangeCamera: boolean;
  currentCamera: number;
}

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  status: QRScannerStatus;
  qrScanner?: any = UglyQRScannerLibraryGlobalObject;
  mostrando:boolean;

  scannedText: string ='';
  scannedTextMesa:string = '';
  	constructor(public navCtrl: NavController, public appCtrl: App, public alertCtrl: AlertController, public navParams: NavParams, public platform:Platform,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public events: Events,private cadernoProvider:CadernoProvider,
    @Inject(DOCUMENT) private document) { 
      this.status = new QRScannerStatus();
      this.mostrando = false;
  	}
 
   showQRScanner(): void {
     this.mostrando = true;
    this.platform.ready().then(() => {
      this.qrScanner.show(status => {
        this.status = status;
        this.setIonicAppTransparency(true, this.zone);
      });
    });
  }

  hideQRScanner(): void {
    this.platform.ready().then(() => {
      this.qrScanner.hide(status => {
        if (this.status.previewing) {
          this.qrScanner.pausePreview(status => {
            this.status = status;
            this.setIonicAppTransparency(false, this.zone);
          });
        } else {
          this.status = status;
          this.setIonicAppTransparency(false, this.zone);
        }
      });
    });
  }

  scanQRCode(): void {
    this.status.scanning = true;
    this.platform.ready().then(() => {
      this.qrScanner.scan((err, text) => {
        if (err) {
          return;
        }
        this.status.scanning = false;

        this.qrScanner.pausePreview(status => {
          this.status = status;
          this.zone.run(() => {
          });
          setTimeout(() => this.hideQRScanner(), 2000);
        });
        if(text.result == "Pagina 1"){
          text.result = "CB_01924";
        }
        else if(text.result == "Caderno Biologia"){
          text.result = "Pagina 1";
        }
        let toast = this.toastCtrl.create({
          message: "Código Escaneado: " + text.result,
          duration: 3000,
          position: 'middle',
        });
        toast.present();
        this.zone.run(() => {});
        this.mostrando = false;
        if(this.cadernoProvider.tipozitcho == 0){
        this.navCtrl.setRoot(CadernoPage);
        }
        else{
        this.navCtrl.setRoot(PaginaPage);
        }
      });
    });
  }
  pausePreview(): void {
    this.platform.ready().then(() => {
        this.qrScanner.pausePreview(status => {
          this.status = status;
          this.zone.run(() => {
          });
        });
    });
  }
  private setIonicAppTransparency(enabled: boolean, zone: NgZone): void {
    let qrScanTransparencyClass = 'qrscan-transparent';
    let ionAppEl = this.document.getElementsByTagName('ion-app')[0];
    let ionNavEl = this.document.getElementsByTagName('ion-nav')[0];
    let divNavDecorEl = this.document.getElementsByClassName('nav-decor')[0];

    ionAppEl && this.toggleClass(qrScanTransparencyClass, ionAppEl, enabled);
    ionNavEl && this.toggleClass(qrScanTransparencyClass, ionNavEl, enabled);
    divNavDecorEl &&
      this.toggleClass(qrScanTransparencyClass, divNavDecorEl, enabled);
    zone.run(() => {
    });
  }

  private toggleClass(className: string, element: any, enable: boolean): void {
    let elmClassAttr: string = element.hasAttribute('class')
      ? element.getAttribute('class')
      : '';
    var newClassAttr: string;

    if (enable) {
      if (elmClassAttr.indexOf(className) < 0) {
        newClassAttr = (elmClassAttr + ' ' + className).trim();

        element.setAttribute('class', newClassAttr);
      }
    } else {
      if (elmClassAttr.indexOf(className) >= 0) {
        newClassAttr = elmClassAttr
          .split(className)
          .join(' ')
          .replace(/  +/g, ' ')
          .trim();

        if (newClassAttr === '' || newClassAttr == null || newClassAttr == 'undefined') 
          element.removeAttribute('class');
        else 
          element.setAttribute('class', newClassAttr);
        
      }
    }
  }
}
