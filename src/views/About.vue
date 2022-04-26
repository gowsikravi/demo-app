<template>
  <div class="about">
    <div v-if="teamName && teamPlayers">
      <div v-for="(player, id) in teamPlayers" :key="id">{{player.name}}</div>
    </div>
    <div v-else>Check your team name</div>
    <div>{{test}}</div>
  </div>
</template>
<script>
export default {
  name:"aboutPage",
  props: {
    teamName: {
      type: String,
      default: ""
    },
    test: {
      type: String,
      default: ""
    }
  },
  computed:{
    teamPlayers(){
      if(this.teamName){
        return this.$store.getters.getPlayersByTeam(this.teamName);
      }
    }
  }
}
</script>
