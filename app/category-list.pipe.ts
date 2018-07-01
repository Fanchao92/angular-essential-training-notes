import { Pipe } from '@angular/core';

@Pipe({
	name: 'categoryList',
	pure: true
})
export class CategoryListPipe {
	transform(mediaItems) {
		let categories = [];

		mediaItems.forEach(mi => {
			if (categories.indexOf(mi.category) <= -1) {
				categories.push(mi.category);
			}
		});
		return categories.join(', ');
	}
}

/* NOTE:
https://angular.io/guide/pipes#custom-pipes
A Pipe should have 2 metadata: name and pure
For purity of a pipe, refer to: https://angular.io/guide/pipes#pure-and-impure-pipes
Then, the transform method should be overriden and can take in at most 2 parameters.
If it takes only 1 parameter, it should be the object to which this pipe is imposed.
If it takes 2 parameters, the second should be the parameter passed to the pipe using semi-colon
*/