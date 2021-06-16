<template>
	<div v-bind:id="anchorId" class="relative invisible block -top-16"></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: {
		anchorId: String,
	},
});
</script>
