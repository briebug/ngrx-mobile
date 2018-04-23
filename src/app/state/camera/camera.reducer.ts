import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Camera } from './camera.model';
import { CameraActions, CameraActionTypes } from './camera.actions';

export interface State extends EntityState<Camera> {
  // additional entities state properties
  loading: boolean,
  error: string
}

export const adapter: EntityAdapter<Camera> = createEntityAdapter<Camera>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: ''
});

export function reducer(
  state = initialState,
  action: CameraActions
): State {
  switch (action.type) {
    case CameraActionTypes.GetPicture: {
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      }
    }

    case CameraActionTypes.GetPictureSuccess: {
      return {
        ...adapter.addOne(action.payload.camera, state),
        loading: false
      }
    }

    case CameraActionTypes.GetPictureFail: {
      return {
        ...state,
        loading: false,
        error: 'Error reading camera'
      }
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
