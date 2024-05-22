import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private mailgunApiKey = 'f5d68ca0d8352e642d38fa1d8734adc1-32a0fef1-29de4f36'; 
  private mailgunDomain = 'sandbox067d1e38515246b2a36c7d0ab7e951e0.mailgun.org'; 

  constructor(private http: HttpClient) { }

  sendEmail(from: string, subject: string, body: string) {
    const url = `https://api.mailgun.net/v3/${this.mailgunDomain}/messages`;
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(`api:${this.mailgunApiKey}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const formData = new URLSearchParams();
    formData.set('from', from); 
    formData.set('to', 'kenbrojim21@gmail.com');
    formData.set('subject', subject);
    formData.set('text', body);

    return this.http.post(url, formData.toString(), { headers: headers });
  }
}