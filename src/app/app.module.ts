import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkplaceComponent } from './workplace/workplace.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoRepoComponent } from './info-repo/info-repo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    WorkplaceComponent,
    InfoRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
