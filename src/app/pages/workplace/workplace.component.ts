import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService } from '../../github.service';
import { Router } from '@angular/router';
import { Repo } from '../../core/model/repo.model';
import { DataService } from '../../core/service/data.service';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit {
  repos: Repo[] = [];

  constructor(private githubService: GithubService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRepo().subscribe((data) => {
      this.repos = data;
    });
  }

  navegarAComponenteDestino(repo: Repo) {
    this.dataService.repoData = repo;
    this.dataService.navigatedToComponente1 = true;
    this.router.navigate(['/repositories']);
  }
}
