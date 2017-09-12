import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-power-human',
  templateUrl: './power-human.component.html',
  styleUrls: ['./power-human.component.css']
})
export class PowerHumanComponent implements OnInit {
  @Input() myUser: User;

  constructor() { }

  ngOnInit() {
  }

}
