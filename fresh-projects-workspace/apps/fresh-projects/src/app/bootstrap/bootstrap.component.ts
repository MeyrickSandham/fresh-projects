import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarComponent } from '../menubar/menubar.component'

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './bootstrap.component.html',
  imports: [
    RouterModule,
    MenubarComponent
  ],
})
export class BootstrapComponent {}
