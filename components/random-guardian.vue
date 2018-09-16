<template>
  <v-container>
    <!--          -->
    <v-card dark width="600px">
      <v-card-title class="justify-center pa-2 display-1 font-weight-black">Random Guardian</v-card-title>
      <v-img gradient="to top,rgba(0,0,0,0.4), rgba(0,0,0,0.4)" :src="profile.background" width="600px">
        <v-layout row>
          <v-flex xs2>
            <v-img :src="profile.avatarURL" width="90px"></v-img>
            <!-- <v-img :src="profile.platformIcon"></v-img> -->
          </v-flex>
          <v-flex xs10>
            <span class="headline font-weight-medium">{{ profile.gamertag }}</span><br/>
            <span class="subheading font-weight-bold">{{ profile.clanName }}</span><br/>
            <span class="subheading font-weight-regular font-italic">{{ profile.about }}</span>
          </v-flex>
        </v-layout>
        <v-layout row class="ma-2">
          <v-flex xs12>
            <v-layout row class="ma-2">
              <v-flex xs6 text-xs-center>
                <span class="title font-weight-black">Total Time Played</span><br/>
                <span class="subheading font-weight-black">6d 12h</span>
              </v-flex>
              <v-flex xs6 text-xs-center>
                <span class="title font-weight-black">Favorite Subclass</span><br/>
                <span class="subheading font-weight-black">Warlock</span>
              </v-flex>
            </v-layout>
            <v-layout row class="ma-2">
              <v-flex xs6 text-xs-center>
                <span class="title font-weight-black">Favorite Weapon</span><br/>
                <span class="subheading font-weight-black">Hand Cannon</span>
              </v-flex>
              <v-flex xs6 text-xs-center>
                <span class="title font-weight-black">Favorite Activity</span><br/>
                <span class="subheading font-weight-black">PvP</span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'RandomGuardian',
    props: ['profile'],
    data () {
      return {
        isLoading: false
      }
    }
  }
</script>

<style scoped>

</style>