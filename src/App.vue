<template>
  <div id="app">
    <div id="list">
      <div id="list-item" @click="loadHome">Add Players</div>
      <div id="list-item" @click="loadAbout">View Teams</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:"App",
  methods:{
    loadAbout(){
      this.$router.push({name:"AboutTeam", params:{ teamName:"red", test:"test" }})
    },
    loadHome(){
      this.$router.push({name:"Home"})
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
