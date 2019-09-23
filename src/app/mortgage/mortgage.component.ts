import { Component, OnInit } from '@angular/core';
import {IntereststService} from'../Services/interestst.service';
@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private IntereststService: IntereststService) { }

  Total: number;
  years: number;

  calaulateinterest(): void {
  this.Total = this.IntereststService.calculateinterest(this.years)

  }
  ngOnInit() {
  }

}
