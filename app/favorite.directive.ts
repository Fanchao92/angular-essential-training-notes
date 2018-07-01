import { Directive, HostBinding } from '@angular/core'

@Directive({
	selector: '[mwFavorite]'  // NOTE: We use squred brackets here because we want to find a match on an HTML element attribute.
})
export class FavoriteDirective {
	// NOTE: The directive will be bound to the HTML element
	// NOTE: HostBinding can link an internal property to an input property on the host HTML element
	// NOTE: The binding will occur when the variable evaluates to true
	@HostBinding('class.is-favorite') isFavorite = true;
}