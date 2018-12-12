import { SecondPage } from './../second/second.page';
import { MenuPage } from './menu.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstPage } from './../first/first.page';
import { ThirdPage } from './../third/third.page';
import { FourthPage } from './../fourth/fourth.page';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        outlet: 'menucontent',
        component: FirstPage
      },
      {
        path: 'second',
        outlet: 'menucontent',
        component: SecondPage
      },
      {
        path: 'third',
        outlet: 'menucontent',
        component: ThirdPage
      },
      {
        path: 'fourth',
        outlet: 'menucontent',
        component: FourthPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/(menucontent:first)',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
