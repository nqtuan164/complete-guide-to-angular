import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
  styleUrls: ['./input-username.component.css']
})
export class InputUsernameComponent implements OnInit {
  isEmpty = true;
  userName = '';

  constructor() {

  }

  ngOnInit() {
  }

  // onSubmitAvailable(event: Event) {
  //   if ((<HTMLInputElement>event.target).value) {
  //     this.isEmpty = false;
  //   } else {
  //     this.isEmpty = true;
  //   }

  // }

}
