import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repo } from '../../core/model/repo.model';
import { DataService } from '../../core/service/data.service';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-info-repo',
  templateUrl: './info-repo.component.html',
  styleUrls: ['./info-repo.component.css']
})

export class InfoRepoComponent implements OnInit {

  images: any[] | undefined;
  repo: Repo | undefined;

  constructor(private viewportScroller: ViewportScroller, public dataService: DataService, private router: Router) {
    this.repo = dataService.repoData;
    this.images = this.repo?.image;
  }

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);

    if (!this.dataService.repoData) {
      this.router.navigate(['/']);
    }
  }

}
