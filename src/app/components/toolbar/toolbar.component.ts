import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule as ToolbarModulePNG } from 'primeng/toolbar';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {

  }

  showMenu(args: any) {
    this.sharedService.showMenu = !this.sharedService.showMenu;
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