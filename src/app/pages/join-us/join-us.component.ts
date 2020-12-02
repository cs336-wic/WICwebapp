import { Component, OnInit } from '@angular/core';
import {EmailJSResponseStatus} from 'emailjs-com';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

    // emails are sent to a member on leadership, defualt is currently (eac33)
  // code from https://www.emailjs.com/docs/examples/angular/
  public sendJoinEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_06ar58h', 'template_t55kfxa', e.target as HTMLFormElement, 'user_1AZStlEMFg8RVtvHU1dSB')
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
