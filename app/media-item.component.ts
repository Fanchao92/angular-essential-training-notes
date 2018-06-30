import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent { 
	mediaName: string = 'World Cup';

	watchedOn(): string {
		return new Date().toLocaleDateString();
	}

	onDelete() {
		console.log('onDelete invoked');
	}
}
