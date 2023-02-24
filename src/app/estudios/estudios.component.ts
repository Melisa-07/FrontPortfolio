import { Component, OnInit } from '@angular/core';
import { EducationService } from '../Servicios/education.service';
import { Educacion } from '../Models/Education';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../Servicios/token.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss'],
})
export class EstudiosComponent implements OnInit {
  public education: Educacion[] = [];
  public editEducation: Educacion | any;
  public deleteEducation: Educacion | any;
  public getEducation: any;
  roles: string[] = [];
  isAdmin: boolean = false;

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Educacion[]) => {
        this.education = response;
        this.roles = this.tokenService.getAuthorities();
        this.roles.forEach((role) => {
          if (role === 'ROLE_ADMIN') {
            this.isAdmin = true;
          }
        });
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode: String, education?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducationModal');
    } else if (mode === 'delete') {
      this.deleteEducation = education;
      button.setAttribute('data-target', '#deleteEducationModal');
    } else if (mode === 'edit') {
      this.editEducation = education;
      button.setAttribute('data-target', '#editEducationModal');
    }
    container?.appendChild(button);
    button.click();
  }

  /* las funciones que te paso te deberian funcionar, pero mutan el array original que no es lo aconsejado en js.. cualquier cosa dsp vemos otras formas */

  public onAddEducation(addForm: NgForm) {
    document.getElementById('add-education-form')?.click();
    this.educationService.addEducation(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        /* agregas la nueva educacion al array de educacion */
        this.education.push(response);
        //this.getEducation();
        addForm.resetForm();
      },
    });
  }
  public onUpdateEducation(education: Educacion) {
    this.editEducation = education;
    document.getElementById('add-education-form')?.click();
    this.educationService.updateEducation(education).subscribe({
      next: (response: Educacion) => {
        /* buscas el index de la educacion a editar*/
        let index = this.education.findIndex(
          (item) => item.id == response.idEdu
        );
        /* modificas la educacion que se encuentra en el index que buscamos arriba */
        this.education[index] = response;
        console.log(response);
        //this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
  public onDeleteEducation(idEdu: number): void {
    this.educationService.deleteEducation(idEdu).subscribe({
      next: (response: void) => {
        console.log(response);
        /* buscas en el array el index de la educacion con el id que traes del back "idEdu" */
        let index = this.education.findIndex((item) => item.id == idEdu);
        /* eliminas esa edu */
        this.education.splice(index, 1);
        //this.getEducation();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}

