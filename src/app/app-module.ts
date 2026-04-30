import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Products } from './products/products';
import { Footer } from './footer/footer';
import { Photobanner } from './photobanner/photobanner';
import { SideMenu } from './side-menu/side-menu';

@NgModule({
  declarations: [
    App,
    Header,
    Products,
    Footer,
    Photobanner,
    SideMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
