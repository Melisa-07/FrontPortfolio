import { Component, OnInit } from '@angular/core';
import { EducationService } from '../Servicios/education.service';
import { Educacion } from '../Models/Education';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})


 
export class EstudiosComponent implements OnInit {
  public education: Educacion[] = [];
  public editEducation: Educacion | undefined;
  public deleteEducation: Educacion | undefined;
  getEducation: any;
  
  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getEducation().subscribe((response: any) => {
      console.log(response);
      
    });

   
  }

  public onOpenModal(mode:String, education?: Educacion):void{
     const container=document.getElementById('main-container');
     const button=document.createElement('button');
     button.style.display='none';
     button.setAttribute('data-toggle', 'modal');
     if(mode==='add'){
      button.setAttribute('data-target', '#addEducationModal');
     } else if (mode==='delete'){
          this.deleteEducation=education;
          button.setAttribute('data-target', '#deleteEducationModal');
     }
     else if (mode==='edit'){
      this.editEducation=education;
      button.setAttribute('data-target', '#editEducationModal');
 }
      container?.appendChild(button);
      button.click();
  }
  public onAddEducation(addForm: NgForm){
  document.getElementById('add-education-form')?.click();
  this.educationService.addEducation(addForm.value).subscribe({
    next: (Response:Educacion)=>{
      console.log(Response);
      this.getEducation();
      addForm.resetForm();
    }
  })
 } 
 

 public onUpdateEducation(education: Educacion){
  this.editEducation=education
  document.getElementById('add-education-form')?.click();
  this.educationService.updateEducation(education).subscribe({
    next: (Response:Educacion)=>{
      console.log(Response);
      this.getEducation();
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
     
    }
  })
 }


 public onDeleteEducation(idEdu: number):void{
  
 
  this.educationService.deleteEducation(idEdu).subscribe({
    next: (Response:void)=>{
      console.log(Response);
      this.getEducation();
      
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
     
    }
  })
 }

}
  // public getEducations():void{
  //   this.educationService.getEducation().subscribe({
  //     next:(Response:Educacion[]) =>{
  //       this.educations=Response;
  //     },
  //     error:(error:HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   })
  // }
 
