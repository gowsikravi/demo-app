<template>
  <div class="home">
    Red team count:{{redTeamCount}}
    Blue team count:{{blueTeamCount}}
    <players-input/>
    <team-viewer teamName="blue"/>
  </div>
</template>

<script>
import PlayersInput from '../components/PlayersInput.vue'
import TeamViewer from '../components/TeamViewer.vue'
import {mapGetters, mapState} from 'vuex';

export default {
  name: 'Home',
  components: {
    PlayersInput,
    TeamViewer
  },
  computed:{
    ...mapGetters(["getBlueTeam", "getRedTeam"]),
    ...mapState(["players"]),
    blueTeamCount(){
      return this.getBlueTeam.length;
    },
    redTeamCount(){
      return this.getRedTeam.length;
    }
  }
}
</script>
