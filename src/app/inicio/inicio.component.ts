import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Models/User';
import { UsuarioService } from '../Servicios/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../app.component.scss']
})
export class InicioComponent implements OnInit {

  public usuario : any;  
  editUsuario: Usuario | any;

  constructor(private usuarioService:UsuarioService) { }


  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

public onOpenModal(mode: String, usuario?: Usuario): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addUsuarioModal');
  } else if (mode === 'edit') {
    this.editUsuario = usuario;
    button.setAttribute('data-target', '#editUsuarioModal');
  }
  container?.appendChild(button);
  button.click();
}



/* las funciones que te paso te deberian funcionar, pero mutan el array original que no es lo aconsejado en js.. cualquier cosa dsp vemos otras formas */


public onUpdateUsuario(usuario: Usuario) {
  this.editUsuario = usuario;
  document.getElementById('add-experiencia-form')?.click();
  this.usuarioService.updateUsuario(usuario).subscribe({
    next: (response: Usuario) => {
      /* buscas el index de la educacion a editar*/
      let index = this.usuario.findIndex(
        (item: { id: any }) => item.id == response.id
      );
      /* modificas la educacion que se encuentra en el index que buscamos arriba */
      this.usuario[index] = response;
      console.log(response);
      //this.getEducation();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    },
  });
}


}
