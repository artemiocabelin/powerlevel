import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-power-super-saiyan-three',
  templateUrl: './power-super-saiyan-three.component.html',
  styleUrls: ['./power-super-saiyan-three.component.css']
})
export class PowerSuperSaiyanThreeComponent implements OnInit, OnChanges {
  superSaiyanThree: number;
  message: string = '';
  @Input() myUser3: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.superSaiyanThree = this.myUser3.power * 250;
    if (this.superSaiyanThree>=25000) {
      this.message = 'Superlative';
    } else {
      this.message = '';
    }
  }

}
