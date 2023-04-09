import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
    name = "John";
    age = 20;
    allowNewUser = false;
    iAmTrue = true;
    userCreated='No user created';
    enteredData = '';
    myArray = ['one', 'two', 'three'];

    constructor(){
        setTimeout(() => {
            this.allowNewUser = true;
        }, 2000);
    }

    onUserEnter(event : Event){
        this.enteredData = (<HTMLInputElement>event.target).value;
    }

  

    makeMeFalse(){
        this.iAmTrue = false;
    }
    onCreateUser(){
      this.userCreated = 'User was created';
    }
    getUserDetails(){
        return this.name + " " + this.age;
    }
}
