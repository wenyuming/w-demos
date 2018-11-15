<template>
  <div class="page">
    <div class="upload-groups">
      <div class="upload-item" v-for="(i, index) in uploads" :style="{'background': !i.url ? 'url('+ i.bimg+ ') no-repeat' : 'none','backgroundSize': 'contain'}" @click="addPic">
        <img v-if="i.url" :src="i.url" alt="" style="width:100%;height:100%;">
        <input :data-index="index" class="flie-input" name="files" :id="'uploaderInput' + index" type="file" accept="image/*" multiple/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        uploads: [
          {
            til: '正面',
            url: '',
            bimg: '/static/btn_picture.png'
          },{
            til: '背面',
            url: '',
            bimg: '/static/btn_picture.png'
          },{
            til: '把头',
            url: '',
            bimg: '/static/btn_picture.png'
          },{
            til: '把头背面',
            url: '',
            bimg: '/static/btn_picture.png'
          },{
            til: '表扣正面',
            url: '',
            bimg: '/static/btn_picture.png'
          },{
            til: '表扣背面',
            url: '',
            bimg: '/static/btn_picture.png'
          },{
            til: '表扣侧面',
            url: '',
            bimg: '/static/btn_picture.png'
          }
        ]
      }
    },
    mounted () {

    },
    methods: {
      addPic (event) {
        console.log(event, 'event')
        let index = event.target.dataset.index
        console.log(index, 'index')
        // return
        var vm = this;
        var input = $("#uploaderInput" + index);
        input.unbind('change').on('change', function (e) {
            var files = input[0].files;
            let img1 = event.target.files[0]
            let form = new FormData()
          form.append('file',img1,img1.name)
          vm.$api.post('https://cloud.paotui.com/upload/qiniu/index?account_id=1000000&access_token=1',form).then(res => {
            console.log(res,'res')
            let a = vm.uploads[index]
            a.url = res.data.datas.img_url
            vm.uploads.splice(index, 1, a)
            console.log(vm.uploads, 'vm.uploads')
            // vm.needImg.push(res.data.datas.src)
          })
        });
      }
    }
  }
</script>
<style scoped>
  .page {
    background-color: #FFF;
  }
  .upload-groups {
    display: flex;
    flex-wrap: wrap;
  }
  .upload-item {
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 12px;
    margin-right: 12px;
  }
  .flie-input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }
</style>