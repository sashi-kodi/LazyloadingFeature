import { Component } from '@angular/core';
import {Country} from './country.class';
import {CountryListService} from './country-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html'
})
export class CountryListComponent {
  countries$: Observable<Country[]>;
  
  constructor(private countryListService: CountryListService ){
  
  }
  
  ngOnInit(){
    this.countries$ = this.countryListService.getCountries();
  }
  
}
