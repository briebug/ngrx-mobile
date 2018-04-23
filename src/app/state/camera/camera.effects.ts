import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import { CameraActionTypes, GetPicture, GetPictureSuccess, GetPictureFail } from "./camera.actions";
import { CameraService } from '../../core/services/camera.service';
import { Camera } from "@state/camera/camera.model";

@Injectable()
export class CameraEffects {
  constructor(
    private actions$: Actions,
    private cameraService: CameraService
  ) { }

  @Effect() getCameraImage$: Observable<Action> = this.actions$
    .ofType<GetPicture>(CameraActionTypes.GetPicture)
    .pipe(
      switchMap(() => this.cameraService.getPicture()),
      map(
        (imageData) => {
          const camera: Camera = {
            id: 1,
            imageData: 'data:image/jpeg;base64,' + imageData
          };
          console.log('camera', camera);

          return new GetPictureSuccess({ camera: camera });
        },
        catchError(err => of(new GetPictureFail()))
      )
    );
}
