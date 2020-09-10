import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription:Subscription;

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {



  }

  onLoadServers(id:number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit: 1}, fragment: 'loading'});
  }


  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }

}
