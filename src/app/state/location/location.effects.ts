import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable } from "rxjs/Observable";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

import { LocationActionTypes, GetLocation, GetLocationSuccess, GetLocationFail } from "./location.actions";
import { LocationService } from '../../core/services/location.service';
import { Location } from "@state/location/location.model";

@Injectable()
export class LocationEffects {
  constructor(
    private actions$: Actions,
    private locationService: LocationService
  ) { }

  @Effect() getGpsLocation$: Observable<Action> = this.actions$
    .ofType<GetLocation>(LocationActionTypes.GetLocation)
    .pipe(
      switchMap(() => this.locationService.getCurrentPosition()),
      map(
        (position: Position) => {
          const location: Location = {
            id: 1,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            speed: position.coords.speed
          };

          console.log('location', location);
          return new GetLocationSuccess({ location: location })
        },
        catchError(err => of(new GetLocationFail()))
      )
    );
}
