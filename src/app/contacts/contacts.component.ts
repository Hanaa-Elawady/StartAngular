import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  name:boolean =false;
  age:boolean =false;
  email:boolean =false;
  password:boolean =false;

  nameInput:string = '';
  ageInput:number|undefined
  emailInput:string='';
  PasswordInput:string='';

  labelupp():void{
    this.name = this.nameInput ==''? false :true;
    this.age = this.ageInput == undefined? false : true;
    this.email = this.emailInput ==''? false :true;
    this.password = this.PasswordInput ==''? false :true;
  }

  Color: string = '#2C3E50';
}
