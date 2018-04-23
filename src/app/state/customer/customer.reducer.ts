import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Customer } from './customer.model';
import { CustomerActions, CustomerActionTypes } from './customer.actions';

export interface State extends EntityState<Customer> {
  // additional entities state properties
  selectedCustomerId: number;
  loading: boolean;
  error: string;
}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedCustomerId: null,
  loading: false,
  error: ''
});

export function reducer(state = initialState, action: CustomerActions): State {
  switch (action.type) {

    case CustomerActionTypes.LoadAll: {
      return {
        ...adapter.removeAll(state),
        loading: true,
        error: ''
      };
    }

    case CustomerActionTypes.LoadAllSuccess: {
      return {
        ...adapter.addAll(action.payload.customers, state),
        loading: false
      };
    }

    case CustomerActionTypes.LoadAllFail: {
      return {
        ...state,
        loading: false,
        error: 'error loading customers'
      };
    }

    case CustomerActionTypes.LoadCustomer: {
      return {
        ...state,
        loading: true,
        error: ''
      };
    }

    case CustomerActionTypes.Select: {
      return {
        ...state,
        selectedCustomerId: action.payload.customer.id
      };
    }

    case CustomerActionTypes.Update: {
      return adapter.updateOne(action.payload.customer, state);
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedCustomerId;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
