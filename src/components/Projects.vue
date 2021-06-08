<template>
	<div id="projects" class="justify-around px-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		<li class="px-6 py-10 list-none" v-for="project in projects" :key="project.name" >
			<ProjectCard :project="project" />
		</li>
	</div>
</template>

<script lang="ts">
import projectsJson from "@/assets/projects.json";
import { Project } from "@/models/project";
import ProjectCard from "@/components/ProjectCard.vue";
import Vue from "vue";

export default Vue.extend({
	name: "Projects",

	components: {
		ProjectCard,
	},

	data() {
		return {
			projects: Array<Project>(),
		};
	},

	beforeMount: function () {
		for (let json of projectsJson) {
			let project = new Project(json.name, json.link, json.description);

			this.projects.push(project);
		}
	},
});
</script>

<style></style>
