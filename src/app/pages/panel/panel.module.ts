import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.component').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.component').then(m => m.AboutModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../help/help.component').then(m => m.HelpModule)
      },

    ]
  }
];

@NgModule({
  declarations: [
    PanelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CommonModule
  ]
})
export class PanelModule { }