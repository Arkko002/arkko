export class Project {
	name: string;
	link: string;
	description: string;
	images: string[];
	icons: string[];
	bullets: string[];

	constructor(
		name: string,
		link: string,
		description: string,
		icons: string[],
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
