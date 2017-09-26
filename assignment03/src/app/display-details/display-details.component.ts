import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  isDisplay = false;
  logTime = [];

  constructor() { }

  ngOnInit() {

  }


  onClick(event: Event) {
    this.logTime.push(Date.now());
    this.isDisplay = !this.isDisplay;
  }

}
