import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/media-item-form.component.html',
  styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form: FormGroup;

  ngOnInit() {
  	this.form = new FormGroup({
  	  medium: new FormControl('Movies'),
  	  name: new FormControl(''),
  	  category: new FormControl(''),
  	  year: new FormControl('')
  	});
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}

/*
NOTE:
Step 1: Define a FormGroup member variable and Initialize it with a model (An object of FormControls)
Step 2-3: (In media-item-form.component.html)
*/