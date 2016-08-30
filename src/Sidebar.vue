

<template>
	<ul>
		<li v-for="_list in list" v-on:click="handleClick($index)">
			{{ 'the '+$index+' item is: '+_list }}
		</li>
	</ul>
</template>

<script>
	require('./sidebar.scss')

	let list = [1,2,3,4,5].map( (elem) => {
		return 'Sidebar' + (elem)
	})

	export default {
		data() {
			return {
				list: list,
			}
		},
		methods: {
			handleClick: function(index) {
				let currentView = 'view'+(index+1)
				this.$dispatch('view-change',currentView)
			}
		}
	}

</script>