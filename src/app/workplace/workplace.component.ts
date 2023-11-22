import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';
import { InfoRepoComponent } from '../info-repo/info-repo.component';
import { Repo } from '../core/model/repo.model';

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

  repos: Repo[] = [
   /* {  name: 'IONIC', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis ullam, ut quisquam illo et non tempora reiciendis accusamus nesciunt maiores labore alias animi laborum provident doloremque facilis, quibusdam voluptatem.', image: "img1.jpg",linkPage:"",linkGit:"https://github.com/"},
    {  name: 'IONIC POKEMON', description:'', image: "img2.jpg",linkPage:"",linkGit:""},*/
    {  name: 'BIOSIMET', description:'Pagina Web de Geolocalizacion de CNET', image: this.imageCnet,linkPage:"",linkGit:"", skills: this.skillsCnet, about: this.aboutCnet},
    {  name: 'IONIC POKEMON', description:'Pagina Web realizada en IONIC', image: this.imagePoke ,linkPage:"https://kendall2106.github.io/IonicPokemon/",linkGit:"https://github.com/Kendall2106/IonicPokemon.git", skills:this.skillsPoke, about: this.aboutCnet},
    {  name: 'BIOSIMET', description:'Pagina Web de Geolocalizacion de CNET', image: this.imageCnet,linkPage:"",linkGit:"", skills: this.skillsCnet, about: this.aboutCnet},
    {  name: 'IONIC POKEMON', description:'Pagina Web realizada en IONIC', image: this.imagePoke ,linkPage:"https://kendall2106.github.io/IonicPokemon/",linkGit:"https://github.com/Kendall2106/IonicPokemon.git", skills:this.skillsPoke, about: this.aboutCnet},
    {  name: 'BIOSIMET', description:'Pagina Web de Geolocalizacion de CNET', image: this.imageCnet,linkPage:"",linkGit:"", skills: this.skillsCnet, about: this.aboutCnet},
    {  name: 'IONIC POKEMON', description:'Pagina Web realizada en IONIC', image: this.imagePoke ,linkPage:"https://kendall2106.github.io/IonicPokemon/",linkGit:"https://github.com/Kendall2106/IonicPokemon.git", skills:this.skillsPoke, about: this.aboutCnet},
    {  name: 'BIOSIMET', description:'Pagina Web de Geolocalizacion de CNET', image: this.imageCnet,linkPage:"",linkGit:"", skills: this.skillsCnet, about: this.aboutCnet},
    {  name: 'IONIC POKEMON', description:'Pagina Web realizada en IONIC', image: this.imagePoke ,linkPage:"https://kendall2106.github.io/IonicPokemon/",linkGit:"https://github.com/Kendall2106/IonicPokemon.git", skills:this.skillsPoke, about: this.aboutCnet},
  ];

  constructor(private githubService: GithubService, private router: Router){

  }

  ngOnInit(): void{
    /*this.githubService.loadRepos().subscribe( res => {
      this.repos = res;
    })*/
  }
  
  /*navegarAComponenteDestino() {
    //this.router.navigate(['/componente1']);
    this.router.navigate(['/componente1'], { state: { data: this.repos } });

  }*/

  valor: string = 'Hola desde el componente padre';

  // Luego, puedes establecer el valor de la propiedad "dato" en el componente hijo.
  navegarAComponenteDestino(repo: Repo) {
    //NotificacionDialogComponent.prototype.notificar(this.respuesta);
    this.router.navigate(['/componente1']);
    InfoRepoComponent.prototype.repo = repo;
  }

}
