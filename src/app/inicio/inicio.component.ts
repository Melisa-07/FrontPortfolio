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

  constructor(private usuarioService:UsuarioService) { }


  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe((response: any) => {
      console.log(response);
      this.usuario = response;
    });

    
 
  }

}
 // ngOnInit(): void {
  //  this.getUser();
 // }

 // public getUser():void{
   // this.usuarioService.getUsuario().subscribe({
     // next:(response : Usuario) => {
       // this.usuario=response;
        
      //},
      //error:(error:HttpErrorResponse)=>{
        //alert(error.message);
      //}
   // })
 // }

//}
