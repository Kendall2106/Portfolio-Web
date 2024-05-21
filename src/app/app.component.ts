import { Component, HostListener } from '@angular/core';
import { DataService } from './core/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio-web';

   public dataService: DataService;

  constructor(private ds: DataService) {
    this.dataService = ds;
   }


}
