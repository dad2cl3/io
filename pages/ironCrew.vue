<template>
  <v-container>
  <v-layout row justify-center>
    <v-dialog v-model="loading" persistent fullscreen content-class="loading-dialog">
      <v-container fill-height>
        <v-layout row justify-center align-center>
          <v-progress-circular indeterminate :size="70" :width="7" color="orange"></v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>
  </v-layout>
  <v-tabs fixed-tabs v-model="tab">
    <v-tabs-slider color='orange'></v-tabs-slider>
    <v-tab v-for='clan in clans' :key='clan.clan_id' :href='"#tab-" + clan.clan_id'>
      <strong>{{ clan.clan_name }}</strong>
    </v-tab>
    <v-tabs-items>
      <v-tab-item v-for='(clan, i) in clans' :key='clan.clan_id' :id='`tab-${clan.clan_id}`' :style="i === 0 ? 'transition: none;' : 'display: none;'">
        <v-container fluid grid-list-lg align-center>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm4 md4 lg3 v-for='j in (cardCounts[i])' :key='j'>
              <v-card flat color="orange">
                <v-card-text dark>
                  <span v-for='member in members[clan.clan_name].slice(25*(j-1),25*j-1)' class="subheading">
                    <!-- <a :href="`https://www.bungie.net/en/Profile/${member.destiny_membership_type}/${member.destiny_id}/${member.destiny_name}`" target="_blank" style="color: #ffffff; text-decoration-line: none;"> -->
                    <router-link :to="`/ironProfile/?membershipId=${member.destiny_id}&membershipType=${member.destiny_membership_type}&clanName=${clan.clan_name}`" :style="getTextColor(member.destiny_membership_type)">
                      <strong>
                        {{ member.destiny_name }}
                        <span v-if="member.admin" class="red--text caption text--darken-2">* Admin</span>
                      </strong>
                    <!-- </a> --></router-link><br/>
                  </span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
  </v-container>
</template>

<script>
  // import axios from 'axios'

  export default {
    data () {
      return {
        clans: null,
        members: null,
        cardCounts: null,
        tab: null,
        loading: true,
        title: 'Iron Crew'
      }
    },
    /* computed: {
      ironCrew () {
        console.log('something')
        return this.$store.getters.getIronCrew
      }
    }, */
    methods: {
      getTextColor (membershipType) {
        switch (membershipType) {
          // color: #ffffff; text-decoration-line: none;
          case 1:
            // console.log('Xbox')
            return 'color: gold; text-decoration-line: none;'
            // break
          case 2:
            // console.log('PS4')
            return 'color: darkblue; text-decoration-line: none;'
            // break
          case 4:
            // console.log('Battle.net')
            return 'color: blue; text-decoration-line: none;'
            // break
          default:
            return 'color: white; text-decoration-line: none;'
        }
      }
    },
    /* beforeCreate () {
      this.loading = true
    },
    beforeMount () {
      this.loading = true
    }, */
    mounted () {
      this.clans = this.$store.state.ironCrew.clans
      this.members = this.$store.state.ironCrew.members

      this.$nextTick(function () { this.tab = `tab-${this.clans[0].clan_id}` })

      let members = this.members

      let cardCounts = []
      this.clans.forEach(function readClans (clan) {
        let memberCount = members[clan.clan_name].length
        let cardCount = Math.ceil(memberCount / 25)
        cardCounts.push(cardCount)
      })

      this.cardCounts = cardCounts
      this.loading = false
    },
    async fetch (context) {
      let store = context.store
      let url = `${process.env.API_ROOT_URL}/ironcrew`

      let ironCrew = await context.$axios.get(url)
      store.commit('setIronCrew', ironCrew.data)
    },
    head () {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Current Iron Orange Members'
          }
        ]
      }
    } /* ,
    async asyncData (context) {
      console.log('Loading Iron Crew...')
      let url = process.env.API_ROOT_URL + '/ironcrew'
      console.log(url)
      let ironCrew = await context.$axios.get(url)
      if (ironCrew.hasOwnProperty('data')) {
        console.log('Returning data...')
        console.log(JSON.stringify({ clans: ironCrew.data.clans, members: ironCrew.data.members }))
        return { clans: ironCrew.data.clans, members: ironCrew.data.members }
      }
    } */
  }
</script>  