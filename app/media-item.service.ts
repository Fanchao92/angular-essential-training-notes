export class MediaItemService {

	get() {
		return this.mediaItems;
	}

	add(mi) {
		this.mediaItems.push(mi);
	}

	delete(mi) {
		let idx = this.mediaItems.indexOf(mi);
		if (idx >= 0) {
			this.mediaItems.splice(idx, 1);
		}
	}

	mediaItems = [
    {
		id: 1,
		name: "Firebug",
		medium: "Series",
		category: "Science Fiction",
		year: 2010,
		watchedOn: 1294166565384,
		isFavorite: false
    },
    {
		id: 2,
		name: "The Small Tall",
		medium: "Movies",
		category: "Comedy",
		year: 2015,
		watchedOn: null,
		isFavorite: true
    }, {
		id: 3,
		name: "The Redemption",
		medium: "Movies",
		category: "Action",
		year: 2016,
		watchedOn: null,
		isFavorite: false
    }, {
		id: 4,
		name: "Hoopers",
		medium: "Series",
		category: "Drama",
		year: null,
		watchedOn: null,
		isFavorite: true
    }, {
		id: 5,
		name: "Happy Joe: Cheery Road",
		medium: "Movies",
		category: "Action",
		year: 2015,
		watchedOn: 1457166565384,
		isFavorite: false
    }
  ];
}