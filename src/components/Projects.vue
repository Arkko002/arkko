<template>
	<div class="pt-12">
		<Anchor anchorId="projects" />
		<div class="
				px-4
				mb-8
				grid
				gap-16
				grid-cols-1
				grid-rows-1
				auto-cols-max
				auto-rows-max
				justify-center
				align-cent
				place-items-center
				md:grid-cols-2
				xl:grid-cols-3
			">
			<ProjectCard v-for="project in projects" :key="project.name" :project="project">
			</ProjectCard>
		</div>
	</div>
</template>

<script lang="ts">
import projectsJson from "../../public/projects.json";
import { Project } from "../models/project";
import ProjectCard from "./ProjectCard.vue";
import Anchor from "./Anchor.vue";

export default {
	name: "Projects",

	components: {
		ProjectCard,
		Anchor,
	},

	data() {
		return {
			projects: Array<Project>(),
		};
	},

	beforeMount: function () {
		for (const json of projectsJson) {
			const iconLinks: URL[] = [];
			for (const icon of json.icons) {
				let iconLink: URL = new URL("/src/assets/icons/" + icon, import.meta.url);
				iconLinks.push(iconLink);
			}

			const project = new Project(
				json.name,
				json.link,
				json.description,
				iconLinks,
				json.images,
				json.bullets
			);

			this.projects.push(project);
		}
	},
};
</script>

<style></style>
