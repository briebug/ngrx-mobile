import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '@state/app.interfaces';
import { getCamera, getCameraLoading, getCameraError } from '@state/camera';
import { Camera } from '@state/camera/camera.model';
import { GetPicture } from '@state/camera/camera.actions';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  camera$: Observable<Camera>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(public navCtrl: NavController,
    private store: Store<AppState>) {
  }

  getPicture() {
    this.store.dispatch(new GetPicture());
  }

  ngOnInit() {
    this.camera$ = this.store.pipe(select(getCamera));
    this.loading$ = this.store.pipe(select(getCameraLoading));
    this.error$ = this.store.pipe(select(getCameraError));
  }

}
