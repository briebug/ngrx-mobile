import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/observable';

import { Customer } from '../../app/state/customer/customer.model';
import { AppState } from '../../app/state/app.interfaces';
import { getSelectedCustomer } from '../../app/state/customer';
import { UpdateCustomer } from '../../app/state/customer/customer.actions';
import { Update } from '@ngrx/entity';

/**
 * Generated class for the CustomerDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer-details.html',
})
export class CustomerDetailsPage {
  customer$: Observable<Customer>;
  customer: Customer;

  constructor(private store: Store<AppState>) {
    this.customer$ = this.store.pipe(select(getSelectedCustomer));
  }

  ionViewDidLoad() {
    console.log('CustomerDetailsPage loaded');
  }

  onCustomerChange(customer: Customer) {
    this.customer = customer;
  }

  save() {
    let customer: Update<Customer> = {
      id: this.customer.id,
      changes: this.customer
    };

    this.store.dispatch(new UpdateCustomer({ customer: customer }));
  }
}
