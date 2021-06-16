export class Project {
	name: string;
	link: string;
	description: string;
	icons: string[];

	constructor(
		name: string,
		link: string,
		description: string,
		icons: string[]
	) {
		this.name = name;
		this.link = link;
		this.description = description;
		this.icons = icons;
	}
}
