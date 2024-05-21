import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { NavigationEnd, Router } from '@angular/router';
import { InfoRepoComponent } from '../info-repo/info-repo.component';
import { Repo } from '../core/model/repo.model';
import { DataService } from '../core/service/data.service';
import { ViewportScroller } from '@angular/common';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit  {

  repos: Repo[] =[];


  constructor( private githubService: GithubService, private router: Router, private dataService: DataService){

  }

  ngOnInit(): void{
      this.dataService.getRepo().subscribe((data) => {
        this.repos = data;
        console.log(this.repos);
      });
  }




  navegarAComponenteDestino(repo: Repo) {
    
    this.dataService.repoData = repo;
    this.dataService.navigatedToComponente1 = true; // Establece la bandera
    this.router.navigate(['/componente1']);

  }


}
