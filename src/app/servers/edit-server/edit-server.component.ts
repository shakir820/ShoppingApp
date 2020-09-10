import { Component, OnInit } from '@angular/core';
import { Server } from '../server.model';
import { ServerService } from '../server.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server:Server;
  serverName:string;
  serverStatus:string;
  allowEdit:boolean = true;
  changesSaved:boolean = false;

  constructor(private serverService: ServerService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((queryParams:Params)=>{
      var server_id = +queryParams['id'];

      this.server = this.serverService.getServer(server_id);
      if(this.server == null) return;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;

    });

    // this.allowEdit = queryParams['allowEdit'] === '1'? true : false;

    this.route.queryParams.subscribe((queryParams:Params)=>{
      this.allowEdit = queryParams['allowEdit'] === '1'? true : false;
    });

  }

  onUpdateServer(){
    this.serverService.updateServer(this.server.id, this.serverName, this.serverStatus);
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo:this.route});
  }

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(this.allowEdit == false){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
    this.changesSaved == false){
      return confirm('Do you want to discard the changes?');
    }
    else{
      return true;
    }
  }
}
