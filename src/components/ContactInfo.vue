<template>
	<div>
		<Anchor anchorId="contact" />
		<div class="flex flex-col h-screen pt-10 bg-gray-100 border-t-4">
			<span class="self-center">Contact Me</span>

			<div
				class="items-center h-full pb-10 justify-items-center grid grid-cols-2"
			>
				<a href="https://github.com/Arkko002">
					<img
						class="h-44 transition transform hover:scale-110"
						src="../../public/GitHub-Mark-120px-plus.png"
						alt="Github"
					/>
				</a>

				<a href="mailto: arkko002@gmail.com">
					<img class="h-44 transition transform hover:scale-110" src="../../public/email.png" alt="Send Email" />
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Anchor from "@/components/Anchor.vue";

export default Vue.extend({
	name: "ContactInfo",
	components: {
		Anchor,
	},
});
</script>

<style></style>
