import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../Models/Education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getEducation(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }

  public getEducationPorId(id: any): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.apiServerUrl}/educacion/${id}`);
  }

  public addEducation(education: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(
      `${this.apiServerUrl}/educacion/add`,
      education
    );
  }

  public updateEducation(education: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(
      `${this.apiServerUrl}/educacion/update`,
      education
    );
  }

  public deleteEducation(educationId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/educacion/delete/${educationId}`
    );
  }
}
