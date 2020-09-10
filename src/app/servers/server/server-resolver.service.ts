import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Server } from '../server.model';
import { Observable } from 'rxjs';
import { ServerService } from '../server.service';


@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server>{

  constructor(private serversService:ServerService) { }


  // resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Server> |
  //  Promise<Server> | Server{
  //    return this.serversService.getServer(+route.params['id']);
  // }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Server> |
   Promise<Server> | Server{
     return this.serversService.getServer(+route.params['id']);
  }
}
