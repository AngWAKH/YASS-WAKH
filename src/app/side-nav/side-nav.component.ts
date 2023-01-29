import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  @Input() sideNavStatus: boolean = false;


  list = [
    {
      number : '1',
      name : 'Home',
      icon: 'fa-sharp fa-solid fa-house'
    },
    {
      number : '2',
      name : 'Dashboard',
      icon: 'fa-sharp fa-solid fa-gauge-high'
    },
    {
      number : '3',
      name : 'Analytics',
      icon: 'fa-solid fa-chart-line'
    },
    {
      number : '4',
      name : 'Projects',
      icon: 'fa-sharp fa-solid fa-clone'
    },
    {
      number : '5',
      name : 'Customers',
      icon: 'fa-sharp fa-solid fa-user-group'
    },
    {
      number : '6',
      name : 'Activities',
      icon: 'fa-sharp fa-solid fa-list-check'
    },
    {
      number : '7',
      name : 'Timesheets',
      icon: 'fa-solid fa-timeline'
    },
    {
      number : '8',
      name : 'My Times',
      icon: 'fa-solid fa-hourglass-start'
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
