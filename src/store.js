import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players:[
        {
            id: 1,
            name: "name 1",
            team: "blue"
        },
        {
            id: 2,
            name: "name 2",
            team: "red"
        },
        {
            id: 3,
            name: "name 3",
            team: "blue"
        },
        {
            id: 4,
            name: "name 4",
            team: "red"
        }
    ],
    teams:["blue", "red"]
  },
  getters : {
    getBlueTeam({players}){
        return players.filter((player)=>player.team == "blue");
    },
    getRedTeam({players}){
        return players.filter((player)=>player.team == "red");
    },
    nextPlayerID({players}){
        return players.length+1;
    },
    getPlayersByTeam : ({players})=>(teamName)=> {
        return players.filter((player)=>player.team == teamName);
    },
    getDefaultTeam ({teams}){
        return teams[0];
    }
  },
  mutations: {
      addPlayerToList({players}, player){
        players.push(player);
      }
  },
  actions: {
      addPlayerToListAfter5Secs(store, player){
          let players= store.state.players;
          setTimeout(()=>{players.push(player)}, 5000);
      }
  },
  modules: {
  }
})
