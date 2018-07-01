import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
  	this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
  	this.hovering = false;
  }
  @Input() set favorited(value) {
  	this.isFavorite = value;
  }
}

/* NOTE:
Initially, if we want our directive to take values, we should define them in this way:
@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite;
  @Input() set favorited(value) {
  	this.isFavorite = value;
  }
}
And if an HTML element wants to use this directive, it should contain the mwFavorite attribute. For example:
<div mwFavorite [favorited]="mediaItem.isFavorite"></div>

The mwFavorite attribute select this div element, since the directive's selector is an attribute selector.
Then the directive binds the value of its isFavorite variable to the value of div's is-favorite class 
(In a host class binding like this, the directive variable should be boolean to decidee whether the HTML element it binds to should have the class or not).
The favorited property binding is just like a property binding in a parent-child binding scenario. Using this property binding, the div
can pass a value to the directive's favorited variable (or setter, as in this example). 

The method discussed up to this point is a general way of property binding. It applies to multiple input property binding. If we just have one input,
then AngularJS provides a simpler way to do this:
@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite;
  @Input() set mwFavorite(value) {
  	this.isFavorite = value;
  }
}
And in the HTML template, we only need to:
<div [mwFavorite]="mediaItem.isFavorite"></div>

This does 2 things at one time:
1. Select the directive with an mwFavorite attribute selector
2. Set the mwFavorite variable or setter of the directive to the value of mediaItem.isFavorite



After passing the values, we can also set a listener on the host HTML element.
*/