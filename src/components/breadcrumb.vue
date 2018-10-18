<template>
	<div class="breadcrumb" v-if="value.length > 0">
	    <span v-for="(i,index) in value">
	      <span @click="jump(i, index)" class="normal" v-if="index != value.length-1">{{i[label]}}</span>
	      <span v-else class="cite">
	        {{i[label]}}
	      </span>
	      <span v-if="index != value.length-1" style="margin: 0 5px;">
	        {{separator}}
	      </span>
	    </span>
	  </div>
</template>
<script>
	export default {
		name: 'wbreadcrumb',
		props: {
			value: {
				type: Array,
				default: []
			},
			label: {
				type: String,
				default: 'label'
			},
			separator: {
				type: String,
				default: '/'
			}
		},
		methods: {
			jump (data,index) {

			}
		}
	}
</script>
<style scoped>
	.breadcrumb {
	  text-align:left;
	  border-top: 1px solid #f6f6f6;
	  padding: 0 15px;
	  padding-left: 35px;
	  line-height: 50px;
	  color: #999;
	  box-shadow:0 1px 2px 0 rgba(0,0,0,.05)
	}
	.normal:hover {
	    color:#009688;
	    cursor:pointer;
	  }
	.cite {
	  color: #333
	}
</style>