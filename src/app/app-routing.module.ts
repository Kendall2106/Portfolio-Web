import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoRepoComponent } from './info-repo/info-repo.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  // ... Otras rutas
  {path:'', component: WorkplaceComponent },
  { path: 'componente1', component: InfoRepoComponent },
  { path: 'contact', component: ContactPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
