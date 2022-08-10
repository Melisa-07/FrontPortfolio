import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperiencialaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
{ path:'', component: InicioComponent },   
{ path:'contacto', component:ContactoComponent },
{ path: 'estudios', component:EstudiosComponent },
{ path:'experiencia', component: ExperiencialaboralComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


