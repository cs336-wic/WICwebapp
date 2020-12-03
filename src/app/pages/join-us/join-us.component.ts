import { Component, OnInit } from '@angular/core';
import {EmailJSResponseStatus} from 'emailjs-com';
import emailjs from 'emailjs-com';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

  myform:FormGroup = new FormGroup({
    inputname: new FormControl(),
    inputemail: new FormControl(),
    inputmajor: new FormControl(),
    inputmessage: new FormControl(),
  })


  // emails are sent to a member on leadership, defualt is currently (eac33)
  // code from https://www.emailjs.com/docs/examples/angular/
  public sendJoinEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_06ar58h', 'template_t55kfxa', e.target as HTMLFormElement, 'user_1AZStlEMFg8RVtvHU1dSB')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        console.log("Sent email!");
        this.resetForm();
      }, (error) => {
        console.log(error.text);
      });
  }

  // fucntion to clear fields when "submit button is pressed"
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