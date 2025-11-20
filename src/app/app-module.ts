import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule
import { App } from './app';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]) // <-- Add RouterModule with empty routes
  ],
  bootstrap: [App],
})
export class AppModule { }
