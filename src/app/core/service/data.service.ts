// data.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  repoData: any;

  private xmlUrl = 'assets/data/project.xml'; // Ruta al archivo XML, ajusta según tu estructura de carpetas

  constructor(private http: HttpClient) {}

  /*(): Observable<any[]> {
    return this.http.get(this.xmlUrl, { responseType: 'text' }).pipe(
      map((xmlString: string) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const object = xmlDoc.querySelectorAll('repo');

        return Array.from(object).map(obj => {
          const id = obj.querySelector('id');
          const name = obj.querySelector('name');
          const description = obj.querySelector('description');
          const image = obj.querySelector('image');
          const linkPage = obj.querySelector('linkPage');
          const linkGit = obj.querySelector('linkGit');
          const skills = obj.querySelector('skills');
          const about = obj.querySelector('about');
          const visible = obj.querySelector('visible');

          return {
            id: id ? id.textContent : '',
            name: name ? name.textContent : '',
            description: description ? description.textContent : '',
            image: image ? image.textContent : '',
            linkPage: linkPage ? linkPage.textContent : '',
            linkGit: linkGit ? linkGit.textContent : '',
            skills: skills ? skills.textContent : '',
            about: about ? about.textContent : '',
            visible: visible ? visible.textContent : ''
          };
        });
      })
    );
  }*/
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