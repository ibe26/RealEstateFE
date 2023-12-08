import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { LocalStorageHelper } from '../API';
import { UserService } from './user.service';
import { PropertyService } from './property.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardTokenService implements CanActivate {

  private userService = inject(UserService);
  private router = inject(Router);
  private propertyService = inject(PropertyService);

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log()
    return this.propertyService.getById(route.params['id']).pipe(map(property => {
      if( JSON.parse(JSON.stringify(jwtDecode(localStorage.getItem(LocalStorageHelper.tokenKey)!)))['ID'] == property.userID)
      {
        return true;
      }
      else{
        this.router.navigate(['unauthorized']);
        return false;
      }
    }))
  }
}