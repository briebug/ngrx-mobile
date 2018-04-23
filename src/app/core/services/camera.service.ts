import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class CameraService {
  constructor(private camera: Camera) { }

  public getPicture(): Observable<any> {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }

    return fromPromise<any>(this.camera.getPicture(options));
  }
}
