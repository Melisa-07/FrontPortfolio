import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Models/User';

 
@Injectable({
  providedIn:'root'
})

export class UsuarioService {
  addUsuario(value: any) {
    throw new Error('Method not implemented.');
  }
  deleteUsuario(id: number) {
    throw new Error('Method not implemented.');
  }
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient){ }

  public getUsuario():Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
 }

public updateUsuario(usuario:Usuario):Observable<Usuario> {

    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/update`,usuario);
}

}