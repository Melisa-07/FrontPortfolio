import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';
import { PersonaService } from '../Servicios/persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../app.component.scss'],
})
export class InicioComponent implements OnInit {
  persona: Observable<Persona>;
  editPersona: Persona | any;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.persona = this.personaService.getPersona();
    console.log(this.persona);
  }

  public onOpenModal(mode: String, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPersonaModal');
    } else if (mode === 'edit') {
      this.editPersona = persona;
      button.setAttribute('data-target', '#editPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onUpdatePersona(user: Persona) {
    /* this.editPersona = persona;
  // document.getElementById('add-experiencia-form')?.click();
  this.personaService.updateUsuario(persona).subscribe({
    next: (response: Persona) => {
      // buscas el index de la educacion a editar
      let index = this.persona.findIndex(
        (item: { id: number; }) => item.id == response.id
      );
      // modificas la educacion que se encuentra en el index que buscamos arriba
      this.persona[index] = response;
      console.log(response);
      //this.getEducation();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    },
  }); */

    this.persona = this.personaService.updatePersona(user);
  }
}
