import { Component } from '@angular/core';
import { EmailService } from '../core/service/email.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  email: any; // Inicializa la variable aquí
  mensaje: any;

  constructor(public emailService: EmailService){

  }
  /*sendEmail() {
    this.emailService.sendEmail(this.email, 'Correo enviado desde el Portfolio', this.mensaje)
      .subscribe(
        () => alert('Correo electrónico enviado con éxito'),
        error => alert('Error al enviar correo electrónico')
      
      );
    test
      ;
  }*/


  sendEmail() {
    this.emailService.sendEmail(this.email, 'Correo enviado desde el Portfolio', this.mensaje)
      .subscribe({
        next: (response: any) => {
          alert('Correo electrónico enviado con éxito');
        },
        error: (error: any) => {
          alert('Hubo un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.');
        }
      });   
  }

}
