//importamos los módulos del router:
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
//importamos mis componentes:
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';

//creamos un objeto con las rutas (array de objetos)
const appRoutes : Routes = [
    {path: '', component: AboutComponent},
    {path: 'sobre-mi', component: AboutComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'crear-proyecto', component: CreateComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '**', component: ErrorComponent},
];

//exportamos la configuracion de las rutas:
export const AppRoutingProviders: any [] = []; //servicio de rutas
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //exportamos el routing


