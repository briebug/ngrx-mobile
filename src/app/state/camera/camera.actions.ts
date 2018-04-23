import { Action } from '@ngrx/store';
import { Camera } from './camera.model';

export enum CameraActionTypes {
  GetPicture = '[Picture] Get',
  GetPictureSuccess = '[Picture] Get Success',
  GetPictureFail = '[Picture] Get Fail'
}

export class GetPicture implements Action {
  readonly type = CameraActionTypes.GetPicture;
}

export class GetPictureSuccess implements Action {
  readonly type = CameraActionTypes.GetPictureSuccess;

  constructor(public payload: { camera: Camera }) { }
}

export class GetPictureFail implements Action {
  readonly type = CameraActionTypes.GetPictureFail;
}

export type CameraActions =
  GetPicture
  | GetPictureSuccess
  | GetPictureFail;
