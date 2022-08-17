import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../Servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: SkillsService [] = [];

  constructor(private skillsService: SkillsService) { }


  ngOnInit(): void {
  
    
  this.skillsService.getSkill().subscribe((response: any) => {
    console.log(response);
    this.skills = response;
  });

}
}