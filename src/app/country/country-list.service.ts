import {Injectable } from '@angular/core';
import {Country} from './country.class';
import { Observable } from 'rxjs';
import {of } from 'rxjs';

const COUNTRIES = [
  new Country(1, 'India', 'New Delhi', 'INR'),
  new Country(2, 'China', 'Beijing', 'RMB')
];

let countryList$ = of(COUNTRIES);

@Injectable()
export class CountryListService{
  
  getCountries =(): Observable<Country[]>=>{
     return countryList$;
  }

}