import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CountryComponent} from './country.component';
import {CountryListComponent} from './country-list.component';


const routes: Routes = [
  {path:'', component: CountryComponent, children:[
     {path:'country-list', component: CountryListComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
