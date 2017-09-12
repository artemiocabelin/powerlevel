import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-power-saiyan',
  templateUrl: './power-saiyan.component.html',
  styleUrls: ['./power-saiyan.component.css']
})
export class PowerSaiyanComponent implements OnInit, OnChanges {
  saiyanPower: number;
  @Input() myUser0: User;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.saiyanPower = this.myUser0.power * 10;
  }

}
