import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appMetaReducers, appReducer } from './app.reducer';
import { CustomerEffects } from './customer/customer.effects';
import { LocationEffects } from './location/location.effects';
import { CameraEffects } from '@state/camera/camera.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer, { metaReducers: appMetaReducers }),
    EffectsModule.forRoot([CustomerEffects, LocationEffects, CameraEffects]),
    StoreDevtoolsModule.instrument()
  ],
  declarations: []
})

export class StateModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
