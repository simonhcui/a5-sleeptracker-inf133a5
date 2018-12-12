import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

import { SecondPageModule } from './../second/second.module';
import { FirstPageModule } from './../first/first.module';
import { ThirdPageModule } from './../third/third.module';
import { FourthPageModule } from './../fourth/fourth.module';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule,
    FirstPageModule,
    SecondPageModule,
    ThirdPageModule,
    FourthPageModule,
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
