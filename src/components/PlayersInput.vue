<template>
  <div id="app">
    Player Name: 
    <input v-model="name"/><br>
    Player Team: 
    <select v-model="team">
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select><br>
    <button :disabled="!playerProfileComplete" @click="addPlayerToList">add</button><br><br>
  </div>
</template>

<script>
export default {
  name:"PlayersInput",
  data() {
    return{
      name:'',
      team:'blue'
    }
  },
  computed:{
    playerProfileComplete(){
        return Boolean(this.name && this.team);
    },
    playerObject(){
        return {
            id   : this.$store.getters.nextPlayerID,
            name : this.name,
            team : this.team
        }
    }
  },
  methods:{
    addPlayerToList(){
        // this.$store.commit('addPlayerToList', (this.playerObject));
        this.$store.dispatch('addPlayerToListAfter5Secs', this.playerObject);
        this.resetForm();
    },
    resetForm(){
        this.name="";
        this.team="blue";
    }
  }
}
</script>