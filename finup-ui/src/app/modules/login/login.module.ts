import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './components/layout/layout.component';

const loginRoutes: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  declarations: [
  
    LayoutComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
