<template>
  <v-container dark>
    <v-dialog v-if="!isLoaded">
      <v-progress-circular indeterminate color="orange" :size="50" :width="5" v-if="!isLoaded"></v-progress-circular>
    </v-dialog>
    <v-card flat>
      <v-card class="account-profile" flat>
        <v-card-title primary-title>
          <v-layout row align-center justify-center>
            <v-flex xs6>
              <v-layout row justify-center>
              <v-flex xs2 align-end>
                <v-img :src="platformIcon" width="90px" contain></v-img>
              </v-flex>
              <v-flex xs4>
                <span class="text-xs-left display-1 font-weight-bold" style="color: orange;">{{ $store.state.account.displayName }}</span><br/>
                <span class="text-xs-left headline font-weight-bold" style="color: orange;">{{ clanName }}</span>
              </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card-title>
        <!-- <AccountProfile :accountId="accountId" :membershipType="membershipType" :characters="characters" @characterSelected="characterId=$event"></AccountProfile> -->
        <AccountProfile :characters="$store.state.characters" @characterSelected="character=$event"></AccountProfile>
      </v-card>
      <v-spacer></v-spacer>
      <v-card class="character-profile" tile>
        <CharacterProfile :character="character" :characterId="characterId" v-if="character !== null"></CharacterProfile>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  import AccountProfile from '../components/account-profile'
  import CharacterProfile from '../components/character-profile'
  import axios from 'axios'

  export default {
    data () {
      return {
        isLoaded: false,
        character: null,
        characterId: null,
        clanName: '',
        platformIcon: ''
      }
    },
    components: {
      AccountProfile,
      CharacterProfile
    },
    mounted () {
      this.character = this.$store.state.characters[0]
      this.characterId = this.$store.state.characters[0].character_id
      let platformType = this.$route.query.membershipType
      let platformIcons = this.$store.state.platformIcons

      console.log(`Platform Type: ${platformType}`)
      let platformIcon = ''
      if (parseInt(platformType) === 1) {
        platformIcon = platformIcons.xb
      } else if (parseInt(platformType) === 2) {
        platformIcon = platformIcons.ps
      } else if (parseInt(platformType) === 4) {
        platformIcon = platformIcons.pc
      }

      console.log(`Platform Icon: ${platformIcon}`)
      this.platformIcon = platformIcon
      this.clanName = `Iron Orange ${this.$route.query.clanName}`
      this.isLoaded = true
    },
    async fetch (context) {
      // console.log(context)
      let store = context.store
      let url = `${process.env.API_ROOT_URL}/profile`

      let params = {
        account_id: context.query.membershipId,
        platform_type: context.query.membershipType
      }

      let characters = await axios.get(url, { params })

      // console.log(characters)
      store.commit('setCharacters', characters.data.data)
      let account = {
        membershipId: characters.data.membershipId,
        membershipType: characters.data.membershipType,
        displayName: characters.data.displayName
      }
      store.commit('setAccount', account)
    }
  }
</script>

<style scoped>

</style>