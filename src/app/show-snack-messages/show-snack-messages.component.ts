import { Component, OnInit } from '@angular/core';
import {ApnService} from '../service/apn.service'
@Component({
  selector: 'app-show-snack-messages',
  templateUrl: './show-snack-messages.component.html',
  styleUrls: ['./show-snack-messages.component.scss']
})
export class ShowSnackMessagesComponent implements OnInit {

  constructor(public apnService:ApnService) { }

  ngOnInit(): void {
  }
  snackedMsg(){
    this.apnService.onSave();
  }
}
