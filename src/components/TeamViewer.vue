<template>
    
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:"TeamViewer",
    props: {
        teamName: {
            type: String,
            default: ""
        }
    },
    computed:{
        ...mapGetters(['getPlayersByTeam']),
        getPlayers(){
            return this.getPlayersByTeam(this.teamName);
        }
    }
}
</script>