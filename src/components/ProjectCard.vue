<template>
	<div class="bg-gray-300 grid grid-cols-2">
		<span>
			<img src="../../public/start-small.jpg" />
			<!--<li v-for="img in imgs" :key="img">-->
			<!--<img :src="img.path" />-->
			<!--</li>-->
		</span>
		<div class="flex flex-col">
			<span>{{ project.name }}</span>
			<span>{{ project.link }}</span>
			<span>{{ project.description }}</span>
			<router-link :to="{ path: '/project/' + project.name, params: { name: project.name } }"
				>See More</router-link
			>
		</div>
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
