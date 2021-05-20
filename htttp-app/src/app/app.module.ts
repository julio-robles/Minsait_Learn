import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestExampleComponent } from './request-example/request-example.component';

import { HttpClientModule } from '@angular/common/http';
import { RequestExampleService } from './request-example/services/request-example.service';

@NgModule({
  declarations: [
    AppComponent,
    RequestExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequestExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
