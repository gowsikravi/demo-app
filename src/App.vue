<template>
  <div id="app">
    <div id="list">
      <div id="list-item" @click="loadHome">Add Players</div>
      <div id="list-item" @click="loadAbout">View Teams</div>
      <!-- <router-link :to="about">Go to about</router-link> -->
    </div>
    <router-view></router-view>
    <div>{{count}}</div><br>
    <div>{{ Username | capitalize("test", "test1") }}</div>
    
    <button @click="increase">Increase</button>
    <input v-focus:count v-model="Username"/>
  </div>
</template>

<script>

export default {
  name:"App",
  methods:{
    loadAbout(){
      this.$router.push({name:"AboutTeam", params:{ teamName:"red", test:"test" }}).catch()
    },
    loadHome(){
      this.$router.push({name:"Home"})
    },
    increase(){
      this.count++;
      this.msgObj.data2.name = this.count
    }
  },
  data(){
    return {
      count:0,
      Username:"",
      msgObj:{
        data1:{
          name: "gow"
        },
        data2:{
          name:"sik"
        }
      }
    }
  },
  watch:{
    // count:{
    //   handler(newValue, oldValue) {
    //     console.log(newValue, oldValue);
    //   },
    //   immediate: true,
    //   deep:true
    // },
    msgObj:{
      handler(newValue, oldValue){
        console.log(newValue.data2.name, oldValue.data2.name);
      },
      flush:'post',
      deep: true
    }
  },
  filters: {
    capitalize: function (value, arg1, arg2) {
      value = value.toString();
      return value.toUpperCase();
    }
  },
  directives: {
    focus: {
      inserted: function (el, binding) {
        el.focus()
      }
    }
  }
}
</script>

<style>
#list{
  border:solid 1px;
  display: flex;
  padding: 2px;
}
#list-item{
  margin-right: 10px;
  border: solid 1px red;
  padding: 5px;
}
</style>
