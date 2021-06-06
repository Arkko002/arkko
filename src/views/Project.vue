<template>
	<div>
		<span>{{ project.name }}</span>
		<span>{{ project.link }}</span>
		<span>{{ project.description }}</span>
	</div>
</template>

<script lang="ts">
import projectsJson from "@/assets/projects.json";
import { defineComponent } from "vue";
import { Project } from "@/models/project";

export default defineComponent({
	name: "Project",

	data() {
		return {
			project: {} as Project,
		};
	},

	created: function () {
		for (let json of projectsJson) {
			if (json.name === this.$route.params.name) {
				this.project = new Project(json.name, json.link, json.description);
			}
		}
	}
});
</script>

<style></style>
