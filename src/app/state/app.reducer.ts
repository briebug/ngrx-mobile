import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { AppState } from './app.interfaces';
import { reducer as customerReducer } from './customer/customer.reducer';
import { reducer as locationReducer } from './location/location.reducer';
import { reducer as cameraReducer } from './camera/camera.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  customer: customerReducer,
  location: locationReducer,
  camera: cameraReducer
};

export const appMetaReducers: MetaReducer<AppState>[] = true
  ? [storeFreeze]
  : [];
