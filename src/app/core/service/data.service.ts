// data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  repoData: any;
  navigatedToComponente1: boolean = false;

  private xmlUrl = 'assets/data/project.xml'; 

  constructor(private http: HttpClient) {}

  getRepo(): Observable<any[]> {
    return this.http.get(this.xmlUrl, { responseType: 'text' }).pipe(
      map((xmlString: string) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const repoNodes = xmlDoc.querySelectorAll('repo');

        return Array.from(repoNodes).map(repoNode => {
          return {
            id: repoNode.querySelector('id')?.textContent || '',
            name: repoNode.querySelector('name')?.textContent || '',
            description: repoNode.querySelector('description')?.textContent || '',
            image: Array.from(repoNode.querySelectorAll('image img')).map(imgNode => imgNode.textContent || ''),
            linkPage: repoNode.querySelector('linkPage')?.textContent || '',
            linkGit: repoNode.querySelector('linkGit')?.textContent || '',
            skills: Array.from(repoNode.querySelectorAll('skills skill')).map(skillNode => skillNode.textContent || ''),
            about: Array.from(repoNode.querySelectorAll('about ab')).map(aboutNode => aboutNode.textContent || ''),
            visible: repoNode.querySelector('visible')?.textContent || ''
          };
        });
      })
    );
  }

  
}