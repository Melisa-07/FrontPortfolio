import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  addPersona(value: any) {
    throw new Error('Method not implemented.');
  }
  deletePersona(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiServerUrl}/persona/id/1`);
  }

  public updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(
      `${this.apiServerUrl}/persona/update`,
      persona
    );
  }
}
