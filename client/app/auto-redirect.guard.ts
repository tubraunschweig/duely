import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from './storage/storage.service';

@Injectable()
export class AutoRedirectGuard implements CanActivate {

  constructor(private router: Router, private storage: StorageService) {}
/**
 * get the saved settings via the router.
 * If there are some it gives out true, else false
 */
  canActivate(): boolean {
    if (!this.storage.settingsLoaded) {
      this.router.navigateByUrl('settings');
      return false;
    } else {
      return true;
    }
  }

}
