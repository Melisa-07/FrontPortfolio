import { Component, OnInit } from '@angular/core';
import { WorkService } from '../Servicios/work.service';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.scss']
})
export class ExperiencialaboralComponent implements OnInit {
  experiencia: any;
  constructor(private experienciaService: WorkService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe((response: any)=> {
    console.log(response);
    this.experiencia = response;

    })
  }

}





  