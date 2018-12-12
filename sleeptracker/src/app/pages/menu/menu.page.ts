import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath = '';
  
  pages = [
    {
      title: 'Sleep Logger',
      url: '/menu/(menucontent:first)'
    },
    {
      title: 'Record Sleepiness',
      url: '/menu/(menucontent:second)'
    },
    {
      title:'View Logged Overnight Sleep',
      url: '/menu/(menucontent:fourth)'
    },
    {
      title:'View Logged Sleepiness',
      url: '/menu/(menucontent:third)'
    }
  ];
       

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
