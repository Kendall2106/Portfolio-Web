import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repo } from '../core/model/repo.model';
@Component({
  selector: 'app-info-repo',
  templateUrl: './info-repo.component.html',
  styleUrls: ['./info-repo.component.css']
})



export class InfoRepoComponent implements OnInit{
  @Input() repo: Repo | undefined;

  images: any[] | undefined;
  public imagenPrincipal: string;

  
  constructor(private route: ActivatedRoute) {
    this.images = this.repo?.image;
    this.imagenPrincipal = "";

   }

  ngOnInit() {
    
    console.log(this.repo?.linkPage); // Mostrará 'valor1'
    this.mostrarGaleria();
  }

  mostrarGaleria(){
      this.imagenPrincipal=this.repo?.image[0];
  }


  open(imagen:string) {
    this.imagenPrincipal = imagen;
  }

}
