import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

import {DarkSkyApi} from 'dark-sky-api';


DarkSkyApi.apiKey = '94384fcb52418512df410bbf931da8f4';
DarkSkyApi.proxy = true;
DarkSkyApi.loadCurrent()
  .then(result => console.log(result));


@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {

  

  constructor() { }
  getDarkSky(){
   

  }

  }

