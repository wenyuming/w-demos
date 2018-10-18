<template>
	<div>
		<div>
			<group>
			    <x-input title="账号：" v-model="submit.account"></x-input>
			</group>
			<group>
			    <x-input title="密码：" v-model="submit.psw"></x-input>
			</group>
			<group>
			    <x-input title="昵称：" v-model="submit.username"></x-input>
			</group>
			<x-button  @click.native="toRegister()" type="primary" style="width:100px;margin: 0 auto;margin-top:20px;">
				注册
			</x-button>
		</div>
	</div>
</template>
<script>
	import { XInput,Group,XButton } from 'vux'
	export default {
		name: 'register',
		components: {
			XInput,
			Group,
			XButton
		},
		data () {
			return {
				submit: {
					account: '',
					psw: '',
					username: ''
				}
			}
		},
		methods: {
			toRegister () {
				let v = this
				this.$vux.loading.show({
				 	text: 'Loading'
				})
				this.$api.get(v.config.baseserverURI + v.config.register, v.submit).then(res => {
					this.$vux.loading.hide()
					if (res.data.code == 200) {
						v.$vux.toast.text(res.data.msg, 'middle')
						v.$router.push({path: '/login'})
					} else {
						v.$vux.toast.text(res.data.errmsg, 'middle')
					}
					// this.$vux.loading.hide()
				})
			}
		}
	}
</script>
<style scoped>
	
</style>