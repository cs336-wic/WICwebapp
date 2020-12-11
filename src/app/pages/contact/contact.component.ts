import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import {EmailJSResponseStatus} from 'emailjs-com';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // documentation used https://angular.io/api/forms/FormGroup
  myform:FormGroup = new FormGroup({
    inputname: new FormControl(),
    inputemail: new FormControl(),
    inputmessage: new FormControl(),
  })

  // emails are sent to a member on leadership, defualt is currently (eac33)
  // documentation used https://www.emailjs.com/docs/examples/angular/
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_06ar58h', 'template_i3vy0yf', e.target as HTMLFormElement, 'user_1AZStlEMFg8RVtvHU1dSB')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        // call function to reset form AFTER email is sent
        this.resetForm();
      }, (error) => {
        console.log(error.text);
      });
  }

    // fucntion to clear fields when "submit button is pressed"
    // documentation used https://angular.io/api/forms/FormGroup
    private resetForm(): void {
      if (this.myform.valid) {
        console.log("form submitted!")
        this.myform.reset();
        console.log("Reset form!");
      }
      else{
        console.log("didn't work!!!!!")
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
