import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';

const lookupLists = {
	mediums: ['Movies', 'Series']
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  bootstrap: [
    AppComponent
  ],
  // NOTE: A provider in the root module will make the service available throughout the app
  // NOTE: If we want to inject something other than a service into the app, we can use 'provide-useValue' or 'provide-useClass' syntax
  providers: [
  	MediaItemService,
  	{ provide: 'lookupListToken', useValue: lookupLists }
  ]
})
export class AppModule {}