import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products?: any = undefined ?? [];

  constructor() { }

  ngOnInit(): void {
    this.products = [];
    this.products?.push({ code: '0', description: 'Casa 01', name: 'Casa 4 x 4', image: '../../assets/casa.jpg' })
    this.products?.push({ code: '1', description: 'Casa 02', name: 'Casa 4 x 4', image: '../../assets/casa.jpg' })
    this.products?.push({ code: '2', description: 'Casa 03', name: 'Casa 4 x 4', image: '../../assets/casa.jpg' })
  }

}


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }

@NgModule({
  imports: [
    HomeRoutingModule,
    CarouselModule,
    CardModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  providers: [

  ],
})
export class HomeModule { }
