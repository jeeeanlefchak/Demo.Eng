import { Component, NgModule, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ToolbarModule as ToolbarModulePNG } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
  @ViewChild('menu', { static: false }) menu?: Menu;

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Open', icon: 'pi pi-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-repeat' }
      ]
    }];
  }

  showMenu(args: any) {
    this.menu?.toggle(args);
  }

}


@NgModule({
  imports: [
    ToolbarModulePNG,
    ButtonModule,
    MenuModule
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ],
  providers: [

  ],
})
export class ToolbarModule { }