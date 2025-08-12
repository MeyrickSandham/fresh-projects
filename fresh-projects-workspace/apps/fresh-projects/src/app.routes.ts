import { Route } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { FloorplanComponent } from './app/floorplan/floorplan.component';
import { FloorplanInteceptor } from './app/inteceptors/floorplan-inteceptor';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'floorplan/:id',
    component: FloorplanComponent,
    canActivate: [FloorplanInteceptor],
  },
  { path: '**', redirectTo: '' }
];
