import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  // NOTE: FormBuilder can help initiate FormGroups or FormControls
  // NOTE: Inject the MediaItemService into the current component (This service is made app-wide available by the provider array in the root module)
  constructor(
  	private formBuilder: FormBuilder,
  	private mediaItemService: MediaItemService,
  	@Inject('lookupListToken') public lookupLists  // NOTE: The lookup Lists are provided in the root module by 'provide-useValue' syntax in the providers array
  											// NOTE: The selector within the Inject decorator needs to match whatever is stated as the 'provide' property within the providers array
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1800;
    let maxYear = 2500;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }
}
