import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent
  ],  // NOTE: Components declared in the root module are available to all components in this app
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}