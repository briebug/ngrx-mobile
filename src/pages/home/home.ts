import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { AppState } from '../../app/state/app.interfaces';
import { Customer } from '../../app/state/customer/customer.model';
import { getAllCustomers } from '../../app/state/customer';
import { LoadAll, Select } from '../../app/state/customer/customer.actions';
import { CustomerDetailsPage } from '../customer-details/customer-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  customers$: Observable<Customer[]>

  constructor(public navCtrl: NavController,
    private store: Store<AppState>) {

    this.customers$ = this.store.pipe(select(getAllCustomers));
  }

  ngOnInit() {
    this.store.dispatch(new LoadAll());
  }

  selectCustomer(customer: Customer) {
    this.store.dispatch(new Select({ customer: customer }));

    this.navCtrl.push(CustomerDetailsPage, {
      customer: customer
    });
  }
}
