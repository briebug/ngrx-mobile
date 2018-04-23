import { Action } from '@ngrx/store';
import { Location } from './location.model';

export enum LocationActionTypes {
  GetLocation = '[Location] Get',
  GetLocationSuccess = '[Location] Get Success',
  GetLocationFail = '[Location] Get Fail'
}

export class GetLocation implements Action {
  readonly type = LocationActionTypes.GetLocation;
}

export class GetLocationSuccess implements Action {
  readonly type = LocationActionTypes.GetLocationSuccess;

  constructor(public payload: { location: Location }) { }
}

export class GetLocationFail implements Action {
  readonly type = LocationActionTypes.GetLocationFail;
}

export type LocationActions =
  GetLocation
  | GetLocationSuccess
  | GetLocationFail;
