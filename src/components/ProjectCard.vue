<template>
	<div
		data-aos="fade-up"
		data-aos-once="true"
		class="bg-gray-300 shadow-2xl flex flex-col p-2"
	>
		<img
			class="object-fill w-full h-2/3 self-center"
			:src="project.images[0]"
			alt="Project"
		/>

		<div class="flex border-b-2 mb-2 justify-between">
			<span class="p-2 pl-1 text-lg font-bold">{{ project.name }}</span>
			<ul class="flex">
				<li class="p-1" v-for="icon in project.icons" :key="icon">
					<img
						class="h-8 w-8 object-scale-down"
						:src="require('../../public/img/icons/' + icon)"
						:alt="icon"
					/>
				</li>
			</ul>
		</div>

		<span class="h-1/5">{{ project.description }}</span>

		<a
			:href="project.link"
			target="_blank"
			class="
				self-end
				justify-self-end
				place-self-end
				mt-5
				border-2 border-black
				p-1
				transition
				hover:-translate-x-1 hover:bg-black hover:text-white
			"
			>See More</a
		>
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
