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
    userCreated='No user created'

    constructor(){
        setTimeout(() => {
            this.allowNewUser = true;
        }, 2000);
    }

    onCreateUser(){
      this.userCreated = 'User was created';
    }
    getUserDetails(){
        return this.name + " " + this.age;
    }
}
