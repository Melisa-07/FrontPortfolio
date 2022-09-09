import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from '../Models/Work';
import { WorkService } from '../Servicios/work.service';

@Component({
  selector: 'app-experiencialaboral',
  templateUrl: './experiencialaboral.component.html',
  styleUrls: ['./experiencialaboral.component.scss'],
})
export class ExperiencialaboralComponent implements OnInit {
  public experiencia: Experiencia[] = [];
  public editExperiencia: Experiencia | any;
  public deleteExperiencia: Experiencia | any;
  public getEducation: any;

  constructor(private experienciaService: WorkService) {}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe({
      next: (response: Experiencia[]) => {
        this.experiencia = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode: String, experiencia?: Experiencia): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienciaModal');
    } else if (mode === 'delete') {
      this.deleteExperiencia = experiencia;
      button.setAttribute('data-target', '#deleteExperienciaModal');
    } else if (mode === 'edit') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#editExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  /* las funciones que te paso te deberian funcionar, pero mutan el array original que no es lo aconsejado en js.. cualquier cosa dsp vemos otras formas */

  public onAddExperiencia(addForm: NgForm) {
    document.getElementById('add-education-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        /* agregas la nueva educacion al array de educacion */
        this.experiencia.push(response);
        //this.getEducation();
        addForm.resetForm();
      },
    });
  }
  public onUpdateExperiencia(experiencia: Experiencia) {
    this.editExperiencia = experiencia;
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.updateExperiencia(experiencia).subscribe({
      next: (response: Experiencia) => {
        /* buscas el index de la educacion a editar*/
        let index = this.experiencia.findIndex(
          (item) => item.id == response.idExp
        );
        /* modificas la educacion que se encuentra en el index que buscamos arriba */
        this.experiencia[index] = response;
        console.log(response);
        //this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public onDeleteExperiencia(idExp: number): void {
    this.experienciaService.deleteExperiencia(idExp).subscribe({
      next: (response: void) => {
        console.log(response);
        /* buscas en el array el index de la educacion con el id que traes del back "idEdu" */
        let index = this.experiencia.findIndex((item) => item.id == idExp);
        /* eliminas esa edu */
        this.experiencia.splice(index, 1);
        //this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
