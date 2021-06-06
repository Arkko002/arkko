<template>
	<div id="projects">
		<li v-for="project in projects" :key="project.name">
			<ProjectCard :project="project" />
			<router-link :to="{path: 'project', params: {name: project.name}}">
		</li>
	</div>
</template>

<script lang="ts">
import projectsJson from "@/assets/projects.json";
import { defineComponent } from "vue";
import { Project } from "@/models/project";
import ProjectCard from "@/components/ProjectCard.vue"

export default defineComponent({
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
	}
});
</script>

<style></style>
