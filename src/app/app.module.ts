import { Covid19Service } from './service/covid-19.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PesquisarComponent } from './components/pesquisar/pesquisar.component';
import { InfoCasosComponent } from './components/info-casos/info-casos.component';
import { InfoVacinaComponent } from './components/info-vacina/info-vacina.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PesquisarComponent,
    InfoCasosComponent,
    InfoVacinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient,Covid19Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
