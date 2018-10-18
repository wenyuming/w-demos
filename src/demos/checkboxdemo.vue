<template>
	<div >
		<check-list :options="options1" label="title" direction="vertical" relkey="methods" 
    v-model="selected1" @change="select" encheckall="true" style="margin: 10px;"></check-list>

		<check-list :options="options2" label="title"  relkey="methods" v-model="selected2" max="3"
     @change="select" style="margin: 10px;"></check-list>
	</div>
</template>

<script>
import checkList from "wcheckbox";
export default {
  name: 'HelloWorld',
  components:{
    checkList
  },
  data () {
    return {
     options1: [{
				methods: 1,
				title: '单选'
			},{
				methods: 2,
				title: '多选'
			},{
				methods: 3,
				title: '判断'
			},{
				methods: 4,
				title: '应答'
			}],
			options2: [{
				methods: 1,
				title: '单选'
			},{
				methods: 2,
				title: '多选'
			},{
				methods: 3,
				title: '判断'
			},{
				methods: 4,
				title: '应答'
			}],
			selected1: [1,4],
			selected2: [1,2],
    }
  },
  methods:{
    select (data) {
				console.log(data.val, 'val')
				console.log(data.current, 'current')
				console.log(this.selected2, 'this.selected2')
			}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
