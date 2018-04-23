import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Customer } from './customer.model';
import {
  CustomerActionTypes,
  LoadCustomer,
  LoadCustomerSuccess,
  LoadCustomerFail,
  LoadAll,
  LoadAllSuccess,
  LoadAllFail
} from './customer.actions';
import { CustomerService } from '../../core/services/customer.service';

@Injectable()
export class CustomerEffects {
  @Effect()
  load: Observable<Action> = this.actions$
    .ofType<LoadAll>(CustomerActionTypes.LoadAll)
    .pipe(
      switchMap(() => this.service.getCustomers()),
      map(
        (customers: Customer[]) =>
          new LoadAllSuccess({ customers: customers }),
        catchError(err => of(new LoadAllFail()))
      )
    );

  @Effect()
  loadById: Observable<Action> = this.actions$
    .ofType<LoadCustomer>(CustomerActionTypes.LoadCustomer)
    .pipe(
      switchMap(action => this.service.getCustomer(action.payload.id)),
      map(
        (customer: Customer) => new LoadCustomerSuccess({ customer: customer }),
        catchError(err => of(new LoadCustomerFail()))
      )
    );

  constructor(private actions$: Actions, private service: CustomerService) { }
}
