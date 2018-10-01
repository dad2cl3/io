<template>
  <v-container dark fluid>
    <v-card flat>
      <v-card class="account-profile" flat>
        <v-card-title primary-title class="ma-0 pa-2">
          <v-container fluid>
            <v-layout row justify-center>
              <v-flex xs12>
                <v-layout row align-center justify-center>
                  <v-img class="platformIcon" :src="platformIcon"></v-img>
                  <div>
                    <span class="gamertag pl-2 text-xs-left">{{ $store.state.account.displayName }}</span><br/>
                    <span class="clanName pl-2 text-xs-left">{{ clanName }}</span>
                  </div>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
        <v-spacer class="my-2"></v-spacer>
        <AccountProfile :characters="$store.state.characters" @characterSelected="character=$event"></AccountProfile>
      </v-card>
      <v-spacer class="my-2"></v-spacer>
      <v-card class="pb-4 character-profile" flat>
        <CharacterProfile :character="character" :characterId="characterId" v-if="character !== null"></CharacterProfile>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  import AccountProfile from '../components/accountProfile'
  import CharacterProfile from '../components/characterProfile'
  import ClientLoadingDialog from '../components/clientLoadingDialog'

  export default {
    data () {
      return {
        isLoading: null,
        character: null,
        characterId: null,
        clanName: '',
        platformIcon: ''
      }
    },
    components: {
      AccountProfile,
      CharacterProfile,
      ClientLoadingDialog
    },
    beforeMount () {
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
      // this.isLoaded = true
      this.isLoading = false
    },
    async fetch (context) {
      // console.log(context)
      let store = context.store
      let url = `${process.env.API_ROOT_URL}/profile`

      let params = {
        account_id: context.query.membershipId,
        platform_type: context.query.membershipType
      }

      let characters = await context.$axios.get(url, { params })

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

  .gamertag {
    font-size: 34px;
    font-weight: bold;
    color: orange;
  }

  .clanName {
    font-size: 34px;
    font-weight: bold;
    color: orange;
  }
  .platformIcon {
    max-width: 90px;
  }

  @media all and (max-width: 400px) {
    .platformIcon {
      max-width: 60px;
    }

    .gamertag {
      font-size: 24px;
    }

    .clanName {
      font-size: 24px;
    }
  }
</style>