import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    const element = customElements.get('test-mfe-element');
    if (!element) {
      customElements.define('test-mfe-element', ce);
    }
  }
}
