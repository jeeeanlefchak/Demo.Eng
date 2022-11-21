import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ],
  declarations: [
    MenuComponent
  ],
  providers: [

  ],
})
export class MenuModule { }
