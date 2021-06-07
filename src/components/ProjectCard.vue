<template>
	<div>
		<span>{{ project.name }}</span>
		<span>{{ project.link }}</span>
		<span>{{ project.description }}</span>
		<span>
			<li v-for="img in imgs" :key="img">
				<img :src="img.path" />
			</li>
		</span>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Project } from "@/models/project";

export default Vue.extend({
	props: {
		project: { type: Object as PropType<Project>, required: true },
	},
});
</script>

<style></style>
