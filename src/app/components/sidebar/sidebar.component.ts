import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { MenuModule } from '../menu/menu.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [

  ],
})
export class SidebarModule { }
