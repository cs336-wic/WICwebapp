import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import {EmailJSResponseStatus} from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // emails are sent to a member on leadership, defualt is currently (eac33)
  // code from https://www.emailjs.com/docs/examples/angular/
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_06ar58h', 'template_i3vy0yf', e.target as HTMLFormElement, 'user_1AZStlEMFg8RVtvHU1dSB')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
