import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ],
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Floorplans',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Floorplan 1',
            routerLink: '/floorplan/1',
          },
          {
            label: 'Floorplan 2',
            routerLink: '/floorplan/2',
          },          
          {
            label: 'Floorplan 3',
            routerLink: '/floorplan/3',
          }
        ]
      }
    ];      
  }
}
