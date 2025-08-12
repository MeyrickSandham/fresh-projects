import { CommonModule } from '@angular/common';
import { Component, input, effect } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PanelModule } from 'primeng/panel';
import { GalleriaModule } from 'primeng/galleria';

import { Room, Floorplan, Image } from '../common/models/models';
import { FLOORPLANS } from '../common/models/floorplan.data';

@Component({
  standalone: true,
  selector: 'app-floorplan',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css'],
  imports: [
    CommonModule,
    RouterModule,

    PanelModule,
    GalleriaModule
  ],
})
export class FloorplanComponent {

  id = input<number>();  

  naturalW = 0;
  naturalH = 0;

  responsiveOptions = [
    { breakpoint: '1200px', numVisible: 4 },
    { breakpoint: '992px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '576px', numVisible: 1 }
  ];

  selectedRoomId: string | null = null;
  hoveredRoomId: string | null = null;

  floorplans: Floorplan[];
  currentFloorplan: Floorplan = FLOORPLANS[0];
  currentRoom: Room | null = null;
  currentRoomImageList: Image[] | undefined = [];

  constructor() {
    
    this.floorplans = FLOORPLANS;

    //new trying this out
    effect(() => {
      const raw = this.id();
      if (raw == null) {
        console.error('FloorplanComponent: floorplanId param is required');
        return;
      }
      
      const idx = Number(raw);
      if (Number.isNaN(idx)) {
        console.error('FloorplanComponent: floorplanId must be numeric');
        return;
      }

      this.currentFloorplan = this.floorplans.find(f => Number(f.Id) === idx)!;//Strict mode is hard sometimes
    });
  }

  trackByRoomId = (_: number, r: Room) => r.Id;//Added by Ai, thought was interesting

  onImgLoad(img: HTMLImageElement) {
    this.naturalW = img.naturalWidth;
    this.naturalH = img.naturalHeight;
  }

  selectRoom(room: Room) {
    this.selectedRoomId = room.Id;
    this.currentRoom = room;
    this.currentRoomImageList = this.currentFloorplan.ImageList.filter(x => x.Title.includes(room.Name));
  }  
}
