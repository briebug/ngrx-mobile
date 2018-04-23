import { Action } from "@ngrx/store";
import { Customer } from "./customer.model";
import { Update } from "@ngrx/entity";

export enum CustomerActionTypes {
  LoadAll = '[Customer] Load All',
  LoadAllSuccess = '[Customer] Load All Success',
  LoadAllFail = '[Customer] Load All Fail',
  LoadCustomer = '[Customer] Load',
  LoadCustomerSuccess = '[Customer] Load Success',
  LoadCustomerFail = '[Customer] Load Fail',
  Select = '[Customer] Select',
  Update = '[Customer] Update',
}

export class LoadAll implements Action {
  readonly type = CustomerActionTypes.LoadAll;
}

export class LoadAllSuccess implements Action {
  readonly type = CustomerActionTypes.LoadAllSuccess;

  constructor(public payload: { customers: Customer[] }) { }
}

export class LoadAllFail implements Action {
  readonly type = CustomerActionTypes.LoadAllFail;
}

export class LoadCustomer implements Action {
  readonly type = CustomerActionTypes.LoadCustomer;

  constructor(public payload: { id: number }) { }
}

export class LoadCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomerSuccess;

  constructor(public payload: { customer: Customer }) { }
}

export class LoadCustomerFail implements Action {
  readonly type = CustomerActionTypes.LoadCustomerFail;
}

export class Select implements Action {
  readonly type = CustomerActionTypes.Select;

  constructor(public payload: { customer: Customer }) { }
}

export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.Update;

  constructor(public payload: { customer: Update<Customer> }) { }
}

export type CustomerActions = LoadAll
  | LoadAllSuccess
  | LoadAllFail
  | LoadCustomer
  | LoadCustomerSuccess
  | LoadCustomerFail
  | Select
  | UpdateCustomer;
