import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromLocations from './location.reducer';
import { State as LocationsState } from './location.reducer';

export const getLocationsState = createFeatureSelector<LocationsState>('location');

export const {
  selectAll: getAllLocations,
  selectEntities: getLocationEntities,
  selectIds: getLocationIds,
  selectTotal: getTotalLocations
} = fromLocations.adapter.getSelectors(getLocationsState);

export const getLocation = createSelector(
  getLocationEntities,
  (locations) => locations[1]
);

export const getLocationLoading = createSelector(
  getLocationsState,
  fromLocations.getLoading
);

export const getLocationError = createSelector(
  getLocationsState,
  fromLocations.getError
);
