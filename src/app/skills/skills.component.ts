import { Component, OnInit } from '@angular/core';
import {InformationService} from 'src/app/service/information.service';
import {Skills} from '../model/skills';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private infoService:InformationService) { }
  public skill:Skills[];
  public showLoader:boolean=true;
  ngOnInit(): void {
    this.infoService.getSkillsInfo().subscribe(
      response => {this.skill = response, this.showLoader=false}
    );
  }

}
