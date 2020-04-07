import { NgModule, Optional, SkipSelf, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsService } from './app-settings.service';

export function appSettingServiceFactory(appSettingsService: AppSettingsService) {
  return () => appSettingsService.load();
}

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule {

  constructor(@Optional() @SkipSelf() parentModule: ServicesModule) {
    if (parentModule) {
      throw new Error(
        'ServicesModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        AppSettingsService,
        {
          provide: APP_INITIALIZER,
          useFactory: appSettingServiceFactory,
          deps: [AppSettingsService],
          multi: true
        }
      ]
    };
  }
}
