<template>
	<div>
		
	</div>
</template>
<script>
	export default {
		name: 'soketTest',
		data () {
			return {

			}
		},
		methods: {

		},
		mounted () {
			if ("WebSocket" in window) {
				// alert("您的浏览器支持 WebSocket!")
				// 打开一个 web socket
				var ws = new WebSocket("ws://localhost:3000")
				// ws.onopen = function() {
    //               // Web Socket 已连接上，使用 send() 方法发送数据
    //               ws.send("发送数据");
    //               alert("数据发送中...");
    //             }
			}
		}

	}
</script>
<style scoped>
	
</style>