import { InfoVacinaComponent } from './components/info-vacina/info-vacina.component';
import { InfoCasosComponent } from './components/info-casos/info-casos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "casos", component: InfoCasosComponent },
  { path: "vacina", component: InfoVacinaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
