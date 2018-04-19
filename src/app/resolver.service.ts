import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResolverService implements Resolve<any> {
  logs: string[] = [];
  constructor(private http: HttpClient) {
  }


  resolve(route: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): string[] {
    const log: string = 'Producto visitado [' + new Date().toLocaleDateString('es') + ':' + new Date().toLocaleTimeString('es') + ']';
    this.logs.push(log);

    return this.logs;
  }

}
