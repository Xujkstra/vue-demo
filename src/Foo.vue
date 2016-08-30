<template>
	<display></display>
	<increment></increment>
</template>

<script>
	import store from './store.js'
	import Display from './Display.vue'
	import Increment from './Increment.vue'
	export default {
		components: {
			Display,
			Increment
		}
	}
</script>
