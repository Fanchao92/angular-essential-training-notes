import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  	  name: new FormControl('', Validators.compose([
  	  	Validators.required,
  	  	Validators.pattern('[\\w\\-\\s\\/]+'))
  	  ]),
  	  category: new FormControl(''),
  	  year: new FormControl('', this.yearValidator)
  	});
  }

  /*
  NOTE:
  Validators take as input a FormControl instance and returns either null if it’s valid or an error object if it’s invalid.
  */
  yearValidator(control) {
  	if (control.value.trim().length === 0) {
  		return null;
  	} else {
  		let year = parseInt(control.value);
  		let minYear = 1900;
  		let maxYear = 2100;
  		if (year >= minYear && year <= maxYear) {
  			return null;
  		} else {
  			return {'year': true};
  		}
  	}
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}

/*
NOTE:
Model-driven forms:
Step 1: Define a FormGroup member variable and Initialize it with a model (An object of FormControls)
Step 2-3: (In media-item-form.component.html)


Validators:
When a validator fails, the FormGroup variable this validator belongs to will set its "valid" property to false
*/