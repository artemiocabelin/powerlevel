import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-power-super-saiyan-four',
  templateUrl: './power-super-saiyan-four.component.html',
  styleUrls: ['./power-super-saiyan-four.component.css']
})
export class PowerSuperSaiyanFourComponent implements OnInit, OnChanges {
  superSaiyanFour: number;
  messsage: string = '';
  @Input() myUser4: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.superSaiyanFour = this.myUser4.power * 500;
    if (this.superSaiyanFour>=50000) {
      this.messsage = 'The One';
    } else {
      this.messsage = '';
    }
  }

}
