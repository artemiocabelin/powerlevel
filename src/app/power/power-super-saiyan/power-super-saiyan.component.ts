import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-power-super-saiyan',
  templateUrl: './power-super-saiyan.component.html',
  styleUrls: ['./power-super-saiyan.component.css']
})
export class PowerSuperSaiyanComponent implements OnInit, OnChanges {
  superSaiyanPower: number;
  @Input() myUser1: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.superSaiyanPower = this.myUser1.power * 90;
  }

}
