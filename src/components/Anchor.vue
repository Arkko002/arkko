<template>
	<div v-bind:id="anchorId" class="relative invisible block -top-16"></div>
</template>

<script lang="ts">
export default {
	props: {
		anchorId: String,
	},
};
</script>
