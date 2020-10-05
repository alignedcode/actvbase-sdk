import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import {AppComponent} from './app.component.tns';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/app',
    // tslint:disable-next-line:object-literal-sort-keys
      pathMatch: 'full',
  },
  {
      path: 'app',
    // tslint:disable-next-line:object-literal-sort-keys
      component: AppComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  // tslint:disable-next-line:object-literal-sort-keys
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
