import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly url = 'https://api.github.com/users/Kendall2106/repos?type=all';

  constructor(private httpClient:HttpClient) { }

  loadRepos = () => this.httpClient.get( this.url)
}
