import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCameras from './camera.reducer';
import { State as CamerasState } from './camera.reducer';

export const getCamerasState = createFeatureSelector<CamerasState>('camera');

export const {
  selectAll: getAllCameras,
  selectEntities: getCameraEntities,
  selectIds: getCameraIds,
  selectTotal: getTotalCameras
} = fromCameras.adapter.getSelectors(getCamerasState);

export const getCamera = createSelector(
  getCameraEntities,
  (cameras) => cameras[1]
);

export const getCameraLoading = createSelector(
  getCamerasState,
  fromCameras.getLoading
);

export const getCameraError = createSelector(
  getCamerasState,
  fromCameras.getError
);
