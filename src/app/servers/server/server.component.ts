import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server:Server;
  allowEdit:number;

  constructor(private serverService:ServerService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    // var id = +this.route.snapshot.params['id'];
    // this.server = this.serverService.getServer(id);

    // this.route.params.subscribe((params:Params)=>{
    //   var server_id = +params['id'];
    //   this.server = this.serverService.getServer(server_id);
    // });

    // this.route.queryParams.subscribe((qp:Params)=>{
    //   this.allowEdit =  +qp['allowEdit'];
    // });
    this.route.data.subscribe((data:Data)=>{
      this.server = data['server'];
    });
  }


  onEdit(){
    // this.router.navigate(['edit'], {relativeTo: this.route, queryParams:{'allowEdit': this.allowEdit}});
    this.router.navigate(['edit'], {relativeTo: this.route, preserveQueryParams: true});
  }

}
