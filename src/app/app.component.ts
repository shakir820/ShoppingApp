import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer  = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion:'',
    answer: '',
    gender: ''
  };
  submitted:boolean = false;


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
    // this.suggestedUsername = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:this.suggestedUsername,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });
    this.signupForm.form.patchValue({
      userData:{
        username: 'Superuser'
    }
  });
  }

  // onSubmit(form:NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.userData.secret;
    this.user.answer = this.signupForm.value.userData.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
    console.log(this.signupForm);
  }
}
