import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repo } from '../core/model/repo.model';
import { DataService } from '../core/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-repo',
  templateUrl: './info-repo.component.html',
  styleUrls: ['./info-repo.component.css']
})



export class InfoRepoComponent implements OnInit{
 // @Input() repo: Repo | undefined;

  images: any[] | undefined;
  public imagenPrincipal: string;
  repo: Repo | undefined;

  
  constructor(private route: ActivatedRoute, public dataService: DataService, private router: Router) {
    this.repo = dataService.repoData;
    this.images = this.repo?.image;
    this.imagenPrincipal = "";

   }

  ngOnInit() {
    if (!this.dataService.repoData) {
      this.router.navigate(['/']);
    }

    this.mostrarGaleria();
  }

  mostrarGaleria(){
      this.imagenPrincipal=this.repo?.image[0];
  }


  open(imagen:string) {
    this.imagenPrincipal = imagen;
  }

}
