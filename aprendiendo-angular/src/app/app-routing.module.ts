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
  { path: 'home', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuego', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent },
  { path: '**', component: HomeComponent }

];


//Exportar el modulo del router:
export const appRoutingProviders: any[] = [];
//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);


//Aprenderemos a solucionar los problemas con ModuleWithProviders en Angular 10.
//Si estas programando con Angular y te da un error similar a este:
  //generic type 'modulewithproviders t ' requires 1 type argument(s)
  
//Lo puedes solucionar agregando el argumento de esta manera, en esta linea del fichero de rutas de tu proyecto:
  //export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);

//Si esto no te funciona prueba con esto:
  //export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);










// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }




