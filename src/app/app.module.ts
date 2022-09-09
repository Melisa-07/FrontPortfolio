import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactoComponent } from './contacto/contacto.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperiencialaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    EstudiosComponent,
    ExperiencialaboralComponent,
    InicioComponent,
    SkillsComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
