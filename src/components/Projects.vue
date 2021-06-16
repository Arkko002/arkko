<template>
	<div>
		<Anchor anchorId="projects" />
		<div
			class="
				justify-around
				px-4
				mb-8
				grid
				gap-4
				grid-cols-1
				md:grid-cols-2
				xl:grid-cols-3
			"
		>
			<ul>
				<li
					class="px-6 py-10 list-none"
					v-for="project in projects"
					:key="project.name"
				>
					<ProjectCard :project="project" />
				</li>
			</ul>
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
				json.icons
			);

			this.projects.push(project);
		}
	},
});
</script>

<style></style>
