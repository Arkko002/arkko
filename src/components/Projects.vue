<template>
	<div>
		<Anchor anchorId="projects" />
		<div
			class="
				px-4
				mb-8
				grid
				gap-16
				grid-cols-1
				justify-center
				align-cent
				md:grid-cols-2
				xl:grid-cols-3
			"
		>
			<ProjectCard
				v-for="project in projects"
				:key="project.name"
				:project="project"
			></ProjectCard>
		</div>
	</div>
</template>

<script lang="ts">
import projectsJson from "../../public/projects.json";
import { Project } from "@/models/project";
import ProjectCard from "@/components/ProjectCard.vue";
import Anchor from "@/components/Anchor.vue";
import Vue from "vue";

export default Vue.extend({
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
		for (let json of projectsJson) {
			let project = new Project(
				json.name,
				json.link,
				json.description,
				json.icons,
				json.images
			);

			this.projects.push(project);
		}
	},
});
</script>

<style></style>
