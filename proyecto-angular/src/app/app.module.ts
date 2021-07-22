import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"; //permite hacer peticiones ajax
import { FormsModule } from "@angular/forms"; //permite usar el two way data binding
import { BrowserModule } from '@angular/platform-browser';
//importamos rutas:
import { routing, AppRoutingProviders } from './app.routing'; 

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CreateComponent,
    DeleteComponent,
    ProjectsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    routing //va aca porque es un modulo
  ],
  providers: [
    AppRoutingProviders//va aca porque es un servicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
