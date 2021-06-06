<template>
	<nav>
		<router-link to="#start">Start</router-link>
		<router-link to="#projects">Projects</router-link>
		<router-link to="#contact">Contact</router-link>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "TheNavbar",
})
</script>

<style>

</style>
