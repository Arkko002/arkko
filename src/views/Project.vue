<template>
	<div class="flex w-screen flex-shrink-0">
		<img src="../../public/img/start-medium.jpg" alt="Project" />

		<div class="flex flex-col">
			<!--      TODO Component for project info-->
			<div class="flex items-center mb-2 flex-0">
				<span class="mr-2">{{ project.name }}</span>
				<a class="self-start" :href="project.link">
					<img src="../../public/img/GitHub-Mark-32px.png" alt="Github" />
				</a>
			</div>

			<ul class="flex">
				<li class="p-1" v-for="icon in project.icons" :key="icon">
					<img
						class="h-8 w-8 object-scale-down"
						:src="require('../../public/img/' + icon)"
						:alt="icon"
					/>
				</li>
			</ul>
		</div>

		<p>{{ project.description }}</p>
	</div>
</template>

<script lang="ts">
import projectsJson from "../../public/projects.json";
import Vue from "vue";
import { Project } from "@/models/project";

export default Vue.extend({
	name: "Project",

	data() {
		return {
			project: {} as Project,
		};
	},

	created: function () {
		for (let json of projectsJson) {
			if (json.name === this.$route.params.name) {
				this.project = new Project(
					json.name,
					json.link,
					json.description,
					json.icons
				);
			}
		}
	},
});
</script>

<style></style>
