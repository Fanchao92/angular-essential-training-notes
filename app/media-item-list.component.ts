import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems;

  // NOTE: Inject the MediaItemService into the current component (This service is made app-wide available by the provider array in the root module)
  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mi) {
    this.mediaItemService.delete(mi);
  }
}
