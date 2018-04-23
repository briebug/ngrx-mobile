import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class LocationService {
  constructor(private geolocation: Geolocation) { }

  public getCurrentPosition(): Observable<any> {
    return fromPromise<any>(this.geolocation.getCurrentPosition());
  }
}
