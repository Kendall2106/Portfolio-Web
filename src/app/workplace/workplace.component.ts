import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';
import { InfoRepoComponent } from '../info-repo/info-repo.component';
import { Repo } from '../core/model/repo.model';
import { DataService } from '../core/service/data.service';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit {

  imageCnet: any[] = ["/cnet/cnet0.jpg","/cnet/cnet1.jpg","/cnet/cnet2.jpg","/cnet/cnet3.jpg"];
  skillsCnet: any[] = ["javaScript","c#",".NET"];
  aboutCnet: any[] = ["Desarrollo de soluciones web en .NET Framework, abarcando tanto el Back End como el Front End mediante arquitecturas MVC.","Maquetación de páginas web utilizando HTML5, CSS y JavaScript.","Integración y utilización de la API Here para optimizar funcionalidades y mejorar la experiencia del usuario, en la utilización de mapas interactivos.","Gestión y mantenimiento de la base de datos MySQL, asegurando la integridad y la eficiencia de los datos. "];

  imagePoke: any[] = ["/pokemon/poke0.jpg","/pokemon/poke1.jpg","/pokemon/poke2.jpg","/pokemon/poke3.jpg"];
  skillsPoke: any[] = ["IONIC","c#"];

  imageRDA: any[] = ["/rda/RDA0.jpg","/rda/RDA1.jpg","/rda/RDA2.jpg","/rda/RDA3.jpg"];
  skillsRDA: any[] = ["IONIC","c#"];

  imageCMC: any[] = ["/cocoMilkC/CM0.jpg","/cocoMilkC/CM1.jpg","/cocoMilkC/CM2.jpg","/cocoMilkC/CM3.jpg"];
  skillsCMC: any[] = ["IONIC","c#"];

  imageCMA: any[] = ["/cocoMilkA/cmA0.jpg","/cocoMilkA/cmA1.jpg","/cocoMilkA/cmA2.jpg","/cocoMilkA/cmA3.jpg"];
  skillsCMA: any[] = ["IONIC","c#"];

  repos: Repo[] = [
   /* {  name: 'IONIC', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis ullam, ut quisquam illo et non tempora reiciendis accusamus nesciunt maiores labore alias animi laborum provident doloremque facilis, quibusdam voluptatem.', image: "img1.jpg",linkPage:"",linkGit:"https://github.com/"},
    {  name: 'IONIC POKEMON', description:'', image: "img2.jpg",linkPage:"",linkGit:""},*/
    {  name: 'BIOSIMET', description:'Pagina Web de Geolocalizacion de CNET', image: this.imageCnet,linkPage:"",linkGit:"", skills: this.skillsCnet, about: this.aboutCnet},
    {  name: 'IONIC POKEMON', description:'Pagina Web realizada en IONIC', image: this.imagePoke ,linkPage:"https://kendall2106.github.io/IonicPokemon/",linkGit:"https://github.com/Kendall2106/IonicPokemon.git", skills:this.skillsPoke, about: this.aboutCnet},
    {  name: 'Reportes de Averias', description:'Pagina Web de reportes de averias hecho para el ICE', image: this.imageRDA,linkPage:"",linkGit:"https://github.com/Kendall2106/ReporteDeAverias.git", skills: this.skillsRDA, about: this.aboutCnet},
    {  name: 'HOTEL COCOMILK CLIENTE', description:'Pagina Web cliente', image: this.imageCMC ,linkPage:"",linkGit:"", skills:this.skillsCMC, about: this.aboutCnet},
    {  name: 'HOTEL COCOMILK ADMINISTRADOR', description:'Pagina Web Administrador', image: this.imageCMA,linkPage:"",linkGit:"", skills: this.skillsCMA, about: this.aboutCnet},
  ];

  constructor(private githubService: GithubService, private router: Router, private dataService: DataService){

  }

  ngOnInit(): void{

  }
  

  navegarAComponenteDestino(repo: Repo) {
    this.dataService.repoData = repo;
    this.router.navigate(['/componente1']);
  }

  // Luego, puedes establecer el valor de la propiedad "dato" en el componente hijo.
  /*navegarAComponenteDestino(repo: Repo) {
    this.router.navigate(['/componente1']);
    InfoRepoComponent.prototype.repo = repo;
  }*/

}
