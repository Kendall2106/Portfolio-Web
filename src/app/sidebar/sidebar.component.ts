import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, AfterViewInit{
@ViewChild('asTitle') asTitle: ElementRef | undefined;

  
constructor(){}

  
ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.initEfect();
  }

  initEfect = () => {
    const target = this.asTitle?.nativeElement;
    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'black'
    })
    
    writer
      .type('Kendall Brown')
      .rest(40000)
      .start();
  }



}
