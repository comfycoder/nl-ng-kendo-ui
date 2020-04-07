import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AppSettings } from '../models/app-settings.model';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private appSettingsUrl: string;

  // tslint:disable-next-line: variable-name
  private _appSettings: AppSettings;

  constructor(
    private http: HttpClient
  ) {
    this.appSettingsUrl = `assets/${environment.configFile}`;
    console.log(this.appSettingsUrl);
  }

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  load(): Promise<any> {

    this._appSettings = null;

    return this.http
      .get(this.appSettingsUrl)
      .toPromise()
      .then((data: any) => {
        this._appSettings = data as AppSettings;
      })
      .catch((err: any) => Promise.resolve());
  }

  get AppSettings(): AppSettings {
    return (this._appSettings) ? this._appSettings : new AppSettings();
  }

  set AppSettings(appSettings: AppSettings) {
    this._appSettings = appSettings;
  }
}
