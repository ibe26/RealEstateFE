import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LocalStorageHelper } from '../API';
import { PropertyService } from './property.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTokenService implements CanActivate {

  private router = inject(Router);
  private propertyService = inject(PropertyService);

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.propertyService.getById(route.params['id']).pipe(map(property => {
      const token = localStorage.getItem(LocalStorageHelper.tokenKey);

      if (token !== null && JSON.parse(JSON.stringify(jwtDecode(token!)))['ID'] == property.userID) {
        return true;
      }
      else {
        this.router.navigate(['unauthorized']);
        return false;
      }
    }))
  }
}