<template>
  <div>
    <rater style="display: inline-block;width:100%;height:50px;text-align:center;" :score="4"></rater>
  </div>
</template>
<script>
// import rater from '@/components/rater.vue'
import rater from 'w-rater'
  export default {
    name: 'rateDemo',
    components: {
      rater
    },
    data () {
      return {

      }
    }
  }
</script>
<style>
  
</style>