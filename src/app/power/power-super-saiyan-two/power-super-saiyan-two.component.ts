import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-power-super-saiyan-two',
  templateUrl: './power-super-saiyan-two.component.html',
  styleUrls: ['./power-super-saiyan-two.component.css']
})
export class PowerSuperSaiyanTwoComponent implements OnInit, OnChanges {
  superSaiyanTwo: number;
  message: string ='';
  @Input() myUser2: User;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.superSaiyanTwo = this.myUser2.power * 150;
    if (this.superSaiyanTwo>9000) {
      this.message = 'Over 9000!';
    } else {
      this.message = '';
    }
  }

}
