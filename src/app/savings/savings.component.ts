import { Component, OnInit } from '@angular/core';
import {IntereststService} from'../Services/interestst.service';
@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private IntereststService: IntereststService) { }

  Total: number;
  years: number;

  calaulateinterest(): void {
  this.Total = this.IntereststService.calculateinterest(this.years)

  }
  ngOnInit() {
  }

}
