import { Component, OnInit } from '@angular/core';
import { InformationService } from '../service/information.service';
import {Header} from '../model/header';
@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.css']
})
export class ResumeHeaderComponent implements OnInit {

  constructor(private informationService:InformationService) {  }
  private headerData:Header;
  ngOnInit() {
    this.informationService.getHeaderInfo().subscribe(
      response=> this.headerData = response
    );
  }

}