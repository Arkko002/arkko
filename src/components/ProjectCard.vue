<template>
	<div v-motion-slide-visible-once-bottom
		class=" bg-gray-300 shadow-2xl flex flex-col p-2 h-full min-w-96 flex-1 max-w-96">
		<div class="m-auto h-72 w-72 overflow-hidden">
			<img class="object-scale-down h-full w-full" :src="project.images[0]" alt="Project" />
		</div>

		<div class="flex flex-col h-full">
			<div class="flex border-b-2 border-black mb-2 justify-between">
				<span class="p-2 pl-1 text-lg font-bold">{{ project.name }}</span>
				<ul class="flex">
					<li class="p-1" v-for="icon in project.icons" :key="icon">
						<img class="h-8 w-8 object-scale-down" :src="icon" :alt="icon" />
					</li>
				</ul>
			</div>
			<span>{{ project.description }}</span>


			<ul class="pt-4">
				<li class="list-disc ml-4" v-for="(bullet, index) in project.bullets" :key="index">
					{{ bullet }}
				</li>
			</ul>

			<a :href="project.link" target="_blank" class="
					mt-auto
					self-end
					justify-self-end
					place-self-end
					border-2 border-black
					p-1
					transition
					hover:bg-black hover:text-white
				">See More</a>
		</div>
	</div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Project } from "../models/project";

export default {
	props: {
		project: { type: Object as PropType<Project>, required: true },
	},
};
</script>

<style></style>
