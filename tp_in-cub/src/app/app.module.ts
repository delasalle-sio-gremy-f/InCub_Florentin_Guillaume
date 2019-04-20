import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { IndexComponent } from './index/index.component';
import { StartupComponent } from './startup/startup.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoFoundersPipe } from './co-founders.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { ConsultantComponent } from './consultant/consultant.component';
import { AddressPipe } from './address.pipe';
import { Page404Component } from './page404/page404.component';
import { AuthentificationComponent } from './authentification/authentification.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StartupComponent,
    CoFoundersPipe,
    ConsultantComponent,
    AddressPipe,
    Page404Component,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
