<template>
	<div>
		<div>
			<group>
			    <x-input title="账号：" v-model="submit.account"></x-input>
			</group>
			<group>
			    <x-input title="密码：" v-model="submit.psw"></x-input>
			</group>
			<x-button type="primary" style="width:100px;margin: 0 auto;margin-top:20px;" @click.native="toLogin()">
				登录
			</x-button>
			<div class="flex-row text-c">
				<div class="flex-5" @click="enterRegister()">
					注册
				</div>
				<div class="flex-5">
					忘记密码
				</div>
			</div>
		</div>
		<switchc v-model="value1" text="on|off" style="margin-left:100px;"></switchc>
	</div>
</template>
<script>
	import { XInput,Group,XButton } from 'vux'
	import switchc from './public/switch'
	export default {
		name: 'login',
		components: {
			XInput,
			Group,
			XButton,
			switchc
		},
		data () {
			return {
				value1: true,
				submit: {
					account: '',
					psw: ''
				}
			}
		},
		methods: {
			toLogin () {
				let v = this
				this.$vux.loading.show({
				 	text: 'Loading'
				})
				this.$api.get(v.config.baseserverURI + v.config.login, v.submit).then(res => {
					this.$vux.loading.hide()
					if (res.data.code == 200) {
						v.$vux.toast.text(res.data.msg, 'middle')
					} else {
						v.$vux.toast.text(res.data.errmsg, 'middle')
					}
					// this.$vux.loading.hide()
				})
			},
			enterRegister () {
				this.$router.push({path: '/register'})
			}
		},
		mounted () {

		}
	}
</script>
<style scoped>
	
</style>