import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { SharedService } from '../../services/shared.service';
import {Paho} from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})

export class ThemeComponent implements OnInit {


  constructor(public sharedService: SharedService) {

  }

  ngOnInit() {

  }



}
