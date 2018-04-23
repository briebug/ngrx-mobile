import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '@state/app.interfaces';
import { getLocation, getLocationLoading, getLocationError } from '@state/location';
import { Location } from '@state/location/location.model';
import { GetLocation } from '@state/location/location.actions';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  location$: Observable<Location>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(public navCtrl: NavController,
    private store: Store<AppState>) {
  }

  getLocation() {
    this.store.dispatch(new GetLocation());
  }

  ngOnInit() {
    this.location$ = this.store.pipe(select(getLocation));
    this.loading$ = this.store.pipe(select(getLocationLoading));
    this.error$ = this.store.pipe(select(getLocationError));
  }
}
