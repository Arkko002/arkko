<template>
	<div
		data-aos="fade-up"
		data-aos-once="true"
		class="w-full h-full bg-gray-300 shadow-2xl flex flex-col"
	>
		<img
			class="object-scale-down"
			src="../../public/img/start-small.jpg"
			alt="Project"
		/>

		<div class="flex flex-col p-2">
			<div class="flex flex-row items-center mb-2 flex-0">
				<span class="mr-2">{{ project.name }}</span>
				<a class="self-start" :href="project.link">
					<img src="../../public/img/GitHub-Mark-32px.png" alt="Github" />
				</a>
			</div>

			<ul class="flex">
				<li class="p-1" v-for="icon in project.icons" :key="icon">
					<img
						class="h-8 w-8 object-scale-down"
						:src="require('./../public/img/' + icon)"
						:alt="icon"
					/>
				</li>
			</ul>

			<span>{{ project.description }}</span>

			<router-link
				class="
					self-end
					mt-5
					border-2 border-black
					p-1
					transition
					hover:-translate-x-1 hover:bg-black hover:text-white
				"
				:to="{
					path: '/project/' + project.name,
					params: { name: project.name },
				}"
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
