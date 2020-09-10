import { Injectable } from '@angular/core';
import { Server } from './server.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public servers:Server[] = [
    new Server(1, 'Shakir Server','online'),
    new Server(2, 'Saima Sever', 'offline'),
    new Server(3, 'Test Sever', 'offline')
  ];

  constructor() { }

  public updateServer(server_id:number, name:string, status:string){
    var ser = this.servers.find((a)=>a.id === server_id);
    if(ser){
      ser.name = name;
      ser.status = status;
    }

  }

  public getServer(server_id:number):Server {
    return this.servers.find((a)=> a.id === server_id);
  }

}
