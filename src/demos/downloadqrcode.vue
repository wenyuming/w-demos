<template>
  <div style="text-align:center;margin-top: 50%">
    <div>
      二维码内容：
      <input type="text" v-model="qrText" placeholder="请输入二维码内容">
    </div>
    <canvas id="canvas"></canvas>
    <div style="text-align:center">
      <button @click="getQrcode">
        生成二维码
      </button>
      <button @click="downloadQrcode">
        下载二维码
      </button>
    </div>
  </div>
</template>
<script>
  import qrcode from 'qrcode'
  export default {
    name: 'downLoadVue',
    components: {
      qrcode: qrcode
    },
    data () {
      return {
        qrText: '哈哈'
      }
    },
    methods: {
      getQrcode(){
        var canvas = document.getElementById('canvas')
        qrcode.toCanvas(canvas, this.qrText, function (error) {
          if (error) console.error(error)
          console.log('QRCode success!');
        })
      },
      downloadQrcode () {
        var canvasData = document.getElementById('canvas');
        console.dir(canvasData, 'canvasData')
        // var a = document.createElement("a");
        // a.href = canvasData.toDataURL();;
        // a.download = "drcQrcode";
        // a.click()
        let url = canvasData.toDataURL()
        var savaFile=function(data,filename)
        {
            var save_link=document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href=data;
            save_link.download=filename;
            var event=document.createEvent('MouseEvents');
            event.initMouseEvent('click',true,false,window,0,0,0,0,0,false,false,false,false,0,null);
            save_link.dispatchEvent(event);
        }
        var filename=''+new Date().getDate();  
        //注意咯 由于图片下载的比较少 就直接用当前几号做的图片名字
        savaFile(url,filename);
      }
    },
    mounted () {
      this.getQrcode()
    }
  }
</script>

<style scoped>
  
</style>