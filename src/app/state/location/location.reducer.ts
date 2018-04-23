import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Location } from './location.model';
import { LocationActions, LocationActionTypes } from './location.actions';

export interface State extends EntityState<Location> {
  // additional entities state properties
  loading: boolean,
  error: string
}

export const adapter: EntityAdapter<Location> = createEntityAdapter<Location>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false,
  error: ''
});

export function reducer(
  state = initialState,
  action: LocationActions
): State {
  switch (action.type) {
    case LocationActionTypes.GetLocation: {
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      }
    }

    case LocationActionTypes.GetLocationSuccess: {
      return {
        ...adapter.addOne(action.payload.location, state),
        loading: false
      }
    }

    case LocationActionTypes.GetLocationFail: {
      return {
        ...state,
        loading: false,
        error: 'Error reading geo location'
      }
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
