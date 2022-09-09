import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../Models/Skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getSkill(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skill/all`);
  }

  public getSkillPorId(id: any): Observable<Skills> {
    return this.http.get<Skills>(`${this.apiServerUrl}/skill/${id}`);
  }

  public addSkill(skill: Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.apiServerUrl}/skill/add`, skill);
  }

  public updateSkill(skill: Skills): Observable<Skills> {
    return this.http.put<Skills>(`${this.apiServerUrl}/skill/update`, skill);
  }

  public deleteSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/skill/delete/${skillId}`
    );
  }
}
