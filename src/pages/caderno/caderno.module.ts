import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadernoPage } from './caderno';

@NgModule({
  declarations: [
    CadernoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadernoPage),
  ],
})
export class CadernoPageModule {}
