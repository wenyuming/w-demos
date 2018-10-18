<template>
	<div>
		<w-sortlist v-model="listData" @click="select" children="cities" relkey="core" label="name"></w-sortlist>
	</div>
</template>
<script>
	import listData from '../assets/js/city.js'
	// import wSortlist from '../components/wSortList'
	import wSortlist from 'wenlist'
	export default {
		name: 'wSortListDemoVue',
		components: {
			wSortlist
		},
		data () {
			return {
				listData: listData
			}
		},
		methods: {
			select (data) {
				console.log(data, 'data')
			} 
		}
	}
</script>
<style scoped>
	
</style>