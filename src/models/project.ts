export class Project {
	name: string;
	link: string;
	description: string;
	images: string[];
	icons: URL[];
	bullets: string[];

	constructor(
		name: string,
		link: string,
		description: string,
		icons: URL[],
		images: string[],
		bullets: string[]
	) {
		this.name = name;
		this.link = link;
		this.description = description;
		this.icons = icons;
		this.images = images;
		this.bullets = bullets;
	}
}
