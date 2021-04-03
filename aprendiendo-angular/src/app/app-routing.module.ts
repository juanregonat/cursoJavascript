//importar modulos del router de Angular;
import { ModuleWithProviders } from '@angular/core';
//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Importar componentes:
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatilla/zapatilla.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';


//Array de rutas:
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuego', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: '**', component: HomeComponent }

];


//Exportar el modulo del router:
export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




