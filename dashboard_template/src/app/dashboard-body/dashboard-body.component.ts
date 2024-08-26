import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css']
})
export class DashboardBodyComponent implements OnInit {
  val: number = 4;
  msg!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
