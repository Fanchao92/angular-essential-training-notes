import { Directive, HostBinding } from '@angular/core'

@Directive({
	selector: '[mwFavorite]'  // NOTE: We use squred brackets here because we want to find a match on an HTML element attribute.
})
export class FavoriteDirective {
	// NOTE: The directive will be bound to the HTML element
	// NOTE: HostBinding can link an internal property to an input property on the host HTML element
	/* NOTE: 
	   The value of the property bound to the host HTML element is determined by the internal property.
	   For example:
	   @HostBinding('style.color') color: string;
	   Then, the color of the host HTML element will be defined by the 'color' variable here.
	*/ 
	@HostBinding('class.is-favorite') isFavorite = true;
}