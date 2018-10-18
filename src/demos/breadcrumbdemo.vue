<template>
	<div>
		<wbreadcrumb separator="|" v-model="menus"></wbreadcrumb>
	</div>
</template>
<script>
	import wbreadcrumb from '@/components/breadcrumb'
	export default {
		name: 'breadcrumbdemo',
		components: {
			wbreadcrumb
		},
		data () {
			return {
				menus: [{
					label: '首页'
				},{
					label: '订单'
				},{
					label: '用户'
				},{
					label: '活动'
				},{
					label: '通知'
				}]
			}
		},
		methods: {

		}
	}
</script>
<style>
	
</style>