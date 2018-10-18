<template>
	<div style="text-align:center">
		<div v-for="i in imgs" style="width:100px;height:100px;display:inline-block;margin-left:10px;margin-top:10px">
        <img :src="i" alt="" style="display:inline-block;width:100%;height:100%" @click="showBigImg(i)">
    </div>
    <wimg v-if="isShowBigImg" :imgs="imgs" :currentImg="current" @close="isShowBigImg = false"></wimg>
	</div>
</template>
<script>
  // import wimg from '@/components/previewImg'
  import wimg from 'w-previewimg'
	export default {
    components: {
      wimg
    },
		data () {
      return {
        isShowBigImg: false,
        current: '',
        imgs: ['static/img/test1.jpg','static/img/test2.jpg','static/img/test3.jpg','static/img/test4.jpg','static/img/test5.jpg','static/img/test6.jpg']
      }
		},
		mounted () {
		},
		methods: {
      showBigImg (i) {
        this.current = i
        console.log(this.current, 'this.current')
        this.isShowBigImg = true
      }
		}
	}
</script>