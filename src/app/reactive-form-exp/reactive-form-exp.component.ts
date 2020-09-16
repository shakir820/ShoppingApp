import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form-exp',
  templateUrl: './reactive-form-exp.component.html',
  styleUrls: ['./reactive-form-exp.component.css']
})
export class ReactiveFormExpComponent implements OnInit {

  constructor() { }
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.checkForFobiddenUsernames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }


  onSubmit(){
    console.log(this.signupForm);
  }

  suggestUsername(){

  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbiesControls() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  checkForFobiddenUsernames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    else return null;
  }


  forbiddenEmails(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(() => {
        if(control.value == "test@test.com"){
          return resolve({'emailIsForbidden': true});
        }
        else return resolve(null);
      }, 1500);
    });
    return promise;
  }
}
