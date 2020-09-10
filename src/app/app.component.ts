import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingApp';
  swValue = 5;
  loadedFeature = 'recipe';
  suggestedUsername:string;

  countStop:boolean = false;
  counter:number = 0;

  onNavigate(feature:string){
    this.loadedFeature = feature;
  }


  onStartCount(){
    this.countStop = false;
    for(;;){
      if(this.countStop){
        break;
      }
      this.counter += 1;
    }
  }

  onStopCount(){
    this.countStop = true;
  }



  suggestUsername(){
    this.suggestedUsername = 'Superuser';
  }
}
