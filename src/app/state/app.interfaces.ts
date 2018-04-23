import { State as customerState } from './customer/customer.reducer';
import { State as locationState } from './location/location.reducer';
import { State as cameraState } from './camera/camera.reducer';

export interface AppState {
  customer: customerState;
  location: locationState,
  camera: cameraState
}

export type State = AppState;
