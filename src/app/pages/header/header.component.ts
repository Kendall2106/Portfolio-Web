import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private router: Router,private dataService: DataService){}


  navegarAComponenteDestino() {
    this.dataService.navigatedToComponente1 = true;
    this.router.navigate(['/contact']);
  }
}
