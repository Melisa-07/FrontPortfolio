import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../Models/Work';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/all`);
  }

  public getExperienciaPorId(id: any): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.apiServerUrl}/experiencia/${id}`);
  }

  public addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(
      `${this.apiServerUrl}/experiencia/add`,
      experiencia
    );
  }

  public updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(
      `${this.apiServerUrl}/experiencia/update`,
      experiencia
    );
  }

  public deleteExperiencia(experienciaId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/experiencia/delete/${experienciaId}`
    );
  }
}
