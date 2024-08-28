import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import * as L from 'leaflet';
import { map } from 'leaflet';
@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.css'],
})
export class DashboardBodyComponent implements OnInit {
  [x: string]: any;
  val: number = 4;
  iconOnStyle: object = {
    color: '#fbbc0b',
    width: '3px',
    height: '5px',
    padding: '5px',
    border: 'none',
  };
  iconOffStyle: object = {
    color: '#fbbc0b',
    width: '3px',
    height: '5px',
    padding: '5px',
    border: 'none',
  };
  basicData: any;
  data: any;
  options: any;
  constructor() {}

  ngOnInit(): void {
    var map = L.map('map').setView([30.505, -0.09], 52);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
      .addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#2779eb',
          borderColor: '#2779eb',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#fa5773',
          borderColor: '#fa5773',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#f8b26f',
          borderColor: '#f8b26f',
          data: [28, 48, 40, 55, 86, 27, 90],
        },
      ],
    };

    this.options = {
      scales: {
        x: {
          grid: {
            display: false, // Set to false to hide x-axis grid lines
          },
        },
        y: {
          grid: {
            display: false, // Set to false to hide y-axis grid lines
          },
        },
      },
    };
  }
}
