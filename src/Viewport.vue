<template>
	<div>
		<component :is="currentView"></component>
	</div>
</template>

<script>
	import View1 from './View-1.vue'
	import View2 from './View-2.vue'
	import View3 from './View-3.vue'
	import View4 from './View-4.vue'
	import View5 from './View-5.vue'

	export default {
		data() {
			return {
				currentView: ''
			}
		},
		components: {
			View1,
			View2,
			View3,
			View4,
			View5
		},
		events: {
			'toggle-view-port': function(view) {
				this.currentView = view
			}
		}
	}
</script>