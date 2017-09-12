import { Component, OnInit } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  user = new User();
  calculatedUser = new User();
  constructor() { }

  onSubmit() {
    this.calculatedUser = this.user;
    this.user = new User();
  }
 
  ngOnInit() {

  }

}
