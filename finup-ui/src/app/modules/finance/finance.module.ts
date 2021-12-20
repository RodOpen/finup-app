import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { LiveGLComponent } from './components/live-gl/live-gl.component';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

const loginRoutes: Routes = [
  { 
    path: '', component: LayoutComponent, children: [
      
    ]
  }
];

@NgModule({
  declarations: [
    LayoutComponent,
    LiveGLComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule
  ]
})
export class FinanceModule { }
