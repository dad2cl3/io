<template>
  <v-container>
    <v-card class="guardian-card" dark>
      <v-card-title class="justify-center pa-2 display-1 font-weight-black">Random Guardian</v-card-title>
      <v-img class="guardian-background" gradient="to top,rgba(0,0,0,0.4), rgba(0,0,0,0.4)" contain :src="profile.background">
        <v-layout row>
          <v-flex xs2>
            <v-img class="guardian-avatar" :src="profile.avatarURL"></v-img>
          </v-flex>
          <v-flex xs10>
            <!-- <span class="gamertag headline font-weight-medium">{{ profile.gamertag }}</span><br/>
            <span class="clan-name subheading font-weight-bold">{{ profile.clanName }}</span><br/>
            <span class="about subheading font-weight-regular font-italic">{{ profile.about }}</span> -->
            <!-- <span class="gamertag">{{ profile.gamertag }}</span><br/>
            <span class="clan-name">{{ profile.clanName }}</span><br/>
            <span class="about">{{ profile.about }}</span> -->
          </v-flex>
        </v-layout>
        <!-- <v-layout row class="ma-2">
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
        </v-layout> -->
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

  .guardian-card {
    width: 600px;
  }

  .guardian-background {
    width: 600px;
  }

  .guardian-avatar {
    width: 90px;
  }

  @media all and (max-width: 400px) {
    .guardian-card {
      width: 350px;
    }

    .guardian-background {
      width: 350px;
    }

    .guardian-avatar {
      width: 50px;
    }

    .gamertag {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .clan-name {
      font-size: 0.9rem;
      font-weight: bold;
    }

    .about {
      font-size: 0.75rem;
      font-style: italic;
    }
  }
</style>