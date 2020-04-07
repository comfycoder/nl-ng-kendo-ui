import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { AppSettingsService } from './app-settings.service';

describe('AppSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSettingsService = TestBed.get(AppSettingsService);
    expect(service).toBeTruthy();
  });
});
