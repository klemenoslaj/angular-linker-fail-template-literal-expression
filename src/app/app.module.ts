import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibraryModule, LibraryComponent } from 'library';

@NgModule({
  imports: [BrowserModule, LibraryModule],
  bootstrap: [LibraryComponent],
})
export class AppModule {}
