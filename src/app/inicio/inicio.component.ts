import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';
import { PersonaService } from '../Servicios/persona.service';
import { Observable } from 'rxjs';
import { TokenService } from '../Servicios/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../app.component.scss'],
})
export class InicioComponent implements OnInit {
  persona: Observable<Persona>;
  editPersona: Persona | any;
  roles!: string[];
  isAdmin: boolean = false;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.persona = this.personaService.getPersona();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((role) => {
      if (role === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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
    this.persona = this.personaService.updatePersona(user);
  }
}
