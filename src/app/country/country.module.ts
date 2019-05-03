import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { CountryComponent } from './country.component';
import {CountryListService} from './country-list.service';
import {CountryRoutingModule} from './country-routing.module';


@NgModule({
  declarations: [CountryListComponent, CountryComponent],
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  providers: [CountryListService]
})
export class CountryModule { 
  constructor(){
     console.log('country module loaded');
  }
}
