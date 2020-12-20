import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  tab = 1;
  constructor() {}

  ngOnInit(): void {}

  setTab(tab: number) {
    this.tab = tab;
  }
  getBorderStyle(val: number) {
    if (val === this.tab) {
      return "{'border': '2px solid orange'}";
    } else {
      return "{'border': 'none'}";
    }
  }
}
