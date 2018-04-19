import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserResolverService implements Resolve<any> {
  constructor(private http: HttpClient) { }

  /**
   * resolve method
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const userId = route.params['id'];
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.get(url);
  }

}
