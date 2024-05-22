import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../core/service/email.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email: any;
  message: any;

  constructor(private viewportScroller: ViewportScroller, public emailService: EmailService){

  }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


  sendEmail() {
    this.emailService.sendEmail(this.email, 'Email sent from Portfolio', this.message)
      .subscribe({
        next: (response: any) => {
          alert('Email sent successfully');
        },
        error: (error: any) => {
          alert('There was an error sending the email. Please try again later.');
        }
      });   
  }

}
