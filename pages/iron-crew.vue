<template>
  <v-tabs fixed-tabs v-model="tab">
    <v-tabs-slider color='orange'></v-tabs-slider>
    <v-tab v-for='clan in clans' :key='clan.clan_id' :href='"#tab-" + clan.clan_id'>
      {{ clan.clan_name }}
    </v-tab>
    <v-tabs-items>
      <v-tab-item v-for='(clan, i) in clans' :key='clan.clan_id' :id='`tab-${clan.clan_id}`' :style="i === 0 ? 'transition: none;' : 'display: none;'">
        <v-container fluid grid-list-lg align-center>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm4 md4 lg3 v-for='j in (cardCounts[i])' :key='j'>
              <v-card flat color="orange">
                <v-card-text dark>
                  <span v-for='member in members[clan.clan_name].slice(25*(j-1),25*j-1)' class="title">
                    <a :href="`https://www.bungie.net/en/Profile/${member.destiny_membership_type}/${member.destiny_id}/${member.destiny_name}`" target="_blank" style="color: #ffffff; text-decoration-line: none;">{{ member.destiny_name }}</a></br>
                  </span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        clans: null,
        members: null,
        cardCounts: null,
        tab: null
      }
    },
    mounted () {
      axios.get('https://io.dad2cl3.net/ironcrew')
        .then(response => {
          console.log(response)
          let clans = response.data.clans
          let members = response.data.members

          this.clans = clans
          this.members = members
          this.$nextTick(function () { this.tab = `tab-${clans[0].clan_id}` })

          let cardCounts = []
          clans.forEach(function readClans (clan) {
            let memberCount = members[clan.clan_name].length
            let cardCount = Math.ceil(memberCount / 25)
            cardCounts.push(cardCount)
          })

          this.cardCounts = cardCounts
        })
    }
  }
</script>  