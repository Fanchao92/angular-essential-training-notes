import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;  // NOTE: Input property comes from the parent component. The variable name should be identical to the HTML property name in its parent
  @Output() delete = new EventEmitter();  // NOTE: Output is used to emit some value to the parent component. The variable name shoudl be identical to the HTML event binding name in the parent

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
