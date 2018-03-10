<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="(item, i) in items" :key="i" height="80%" :src="item.src" transition="fade" reverse-transition="fade">
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat dark>
          <!-- Main card title -->
          <v-layout row wrap justify-center>
            <span class="mt-2 display-2">
              <strong>Leaderboards</strong>
            </span>
          </v-layout>
          <!-- Main row for form and leaderboards -->
          <!-- <v-container> -->
          <v-layout row wrap justify-center>
            <!-- Form -->
            <v-flex xs12 sm6 md4 lg4 v-if="!lbData">
              <v-card flat dark>
                <!-- <v-card-title>Form</v-card-title> -->
                <v-card-text>
                  <v-form name="criteria">
                    <v-select label="Focus" id="focus" :items=focuses name="focus" hint="* Required" persistent-hint v-on:input="getModes()" v-model="lbFocus">
                    </v-select>

                    <v-select label="Mode" id="activity-mode" hint="* Required" persistent-hint :items=modes item-text="mode_name" v-model="lbMode" v-on:input="getStats()" v-bind:disabled="lbFocus === null ? true : false">
                    </v-select>

                    <v-select label="Stat" id="activity-stat" hint="* Required" persistent-hint :items=stats item-text="stat_name" v-model="lbStat" v-bind:disabled="lbMode === null ? true : false">
                    </v-select>

                    <v-select label="Class" id="class" :items=classes item-text="class_name">
                    </v-select>

                    <v-select label="Group" id="group" :items=groups item-text="group_name" v-model="lbGroup" v-on:input="getClans()">
                    </v-select>

                    <v-select label="Clan" id="clan" :items=clans item-text="clan_name" v-model="lbClan">
                    </v-select>

                    <v-btn block @click="getLeaderboard" v-if="lbFocus && lbMode && lbStat">Build Leaderboard</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
            <!-- Leaderboard -->
            <v-flex xs12 sm6 md8 lg8 v-if="lbData">
              <!-- <v-card dark> -->
                <!-- Leaderboard title -->
                <v-layout row wrap justify-center>
                  <v-avatar>
                    <img src="Discord-Logo-Color.png" alt="avatar" @click="sendToDiscord"></img>
                  </v-avatar>
                </v-layout>
                <v-layout row wrap text-xs-center justify-center>
                  <!-- <v-card-title primary-title class="text-xs-center"> -->
                    <div class="headline">{{ lbData.leaderboard.title }}</div>
                  <!-- </v-card-title> -->
                </v-layout>
                <!-- Split leaderboard -->
                <v-layout row wrap justify-center>
                  <v-flex xs12 sm12 md6 lg6>
                    <!-- <v-card flat color="orange"> -->
                      <!-- <v-card-text> -->
                        <v-data-table :headers="lbData.leaderboard.headers" :items="lbData.leaderboard.rankings.slice(0,13)" hide-actions class="elevation-1">
                          <template slot="items" slot-scope="props">
                            <td class="text-xs-center pl-0 pr-0">{{ props.item.Rank }}</td>
                            <td class="text-xs-center pl-0 pr-0">{{ props.item.Gamertag }}</td>
                            <td class="text-xs-center pl-0 pr-0">{{ props.item.Value }}</td>
                          </template>
                        </v-data-table>
                      <!-- </v-card-text> -->
                    <!-- </v-card> -->
                  </v-flex>
                  <v-flex xs12 sm12 md6 lg6>
                    <!-- <v-card flat color="orange"> -->
                      <!-- <v-card-text> -->
                        <v-data-table :headers="lbData.leaderboard.headers" :items="lbData.leaderboard.rankings.slice(13,25)" hide-actions class="elevation-1">
                          <template slot="items" slot-scope="props">
                            <td class="text-xs-center pl-0 pr-0">{{ props.item.Rank }}</td>
                            <td class="text-xs-center pl-0 pr-0">{{ props.item.Gamertag }}</td>
                            <td class="text-xs-center pl-0 pr-0">{{ props.item.Value }}</td>
                          </template>
                        </v-data-table>
                      <!-- </v-card-text> -->
                    <!-- </v-card> -->
                  </v-flex>
                </v-layout>
              <!-- </v-card> -->
            </v-flex>
          </v-layout>
          <!-- </v-container> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        items: [
          {
            src: 'TitanHammer.jpg'
          },
          {
            src: 'cayde6w.jpg'
          },
          {
            src: 'HunterRiflew.jpg'
          },
          {
            src: 'IO_DeadOrbit.jpg'
          },
          {
            src: 'Destiny-Milestones-1.png'
          }
        ],
        discord_image: 'assets/Discord-Color-Logo.png',
        focuses: ['Activity'],
        modes: [],
        stats: [],
        classes: [{class_hash: 0, class_name: 'All'}],
        groups: [{group_id: 0, group_name: 'All'}],
        clans: [{clan_id: 0, clan_name: 'All'}],
        lbFocus: null,
        lbMode: null,
        lbStat: null,
        lbClass: {class_hash: 0, class_name: 'All'},
        lbGroup: {group_id: 0, group_name: 'All'},
        lbClan: {clan_id: 0, clan_name: 'All'},
        lbData: null
      }
    },
    methods: {
      sendToDiscord () {
        alert('Send to Discord')

        let rankings = this.lbData.leaderboard.rankings
        // Find the longest name in the list
        let maxNameLength = 0
        // Find the longest value in the list
        let maxValueLength = 0

        rankings.forEach(function readRankings (rank) {
          if (rank.Gamertag.length > maxNameLength) {
            maxNameLength = rank.Gamertag.length
          }

          if (rank.Value.toString().length > maxValueLength) {
            maxValueLength = rank.Value.toString().length
          }
        })

        maxNameLength += 5

        let list = ''

        rankings.forEach(function readRankings (rank) {
          if (list.length > 0) {
            list += '\n'
          }

          let curNameLength = rank.Gamertag.length
          let curValueLength = rank.Value.toString().length

          let rankSpace = ''
          let nameSpace = ''
          let valueSpace = ''

          if (rank.Rank < 10) {
            rankSpace = ' '
          }

          if (curNameLength < maxNameLength) {
            nameSpace = ' '.repeat(maxNameLength - curNameLength)
          }

          if (curValueLength < maxValueLength) {
            valueSpace = ' '.repeat(maxValueLength - curValueLength)
          }

          // list += `${rankSpace}${rank.Rank} ${rank.Gamertag}${nameSpace}${valueSpace}${rank.Value}`;
          list += rankSpace + rank.Rank + ' ' + rank.Gamertag + nameSpace + valueSpace + rank.Value
        })

        list = '```' + list + '```'

        let webhookUrl = 'https://lb.dad2cl3.net/push-discord/'
        let payload = {
          // content: '',
          embeds: [
            {
              // title: ,
              fields: [
                {
                  name: this.lbData.leaderboard.title,
                  value: list
                }
              ]
            }
          ]
        }

        axios.post(webhookUrl, payload)
          .then(response => {
            let status = response.status
            console.log(status)
          })
      },
      getModes () {
        let url = 'https://lb.dad2cl3.net/get-criteria'
        axios.get(url, {params: {lookup: 'modes', parameter: this.lbFocus}})
          .then(response => {
            let modes = response.data.modes

            for (let i = 0; i < modes.length; i++) {
              this.modes.push(modes[i])
            }
          })
      },
      getStats () {
        let url = 'https://lb.dad2cl3.net/get-criteria'
        axios.get(url, {params: {lookup: 'stats', parameter: this.lbMode.mode_type}})
          .then(response => {
            this.stats = response.data.stats
          })
      },
      getClans () {
        if (this.lbGroup !== 0) {
          let url = 'https://lb.dad2cl3.net/get-criteria'
          axios.get(url, {params: {lookup: 'clans', parameter: this.lbGroup.group_id}})
            .then(response => {
              let clans = response.data.clans

              for (let i = 0; i < clans.length; i++) {
                this.clans.push(clans[i])
              }
            })
        } else {
          this.clans = [{clan_id: 0, clan_name: 'All'}]
          this.lbClan = 0
        }
      },
      getLeaderboard () {
        let group

        try {
          group = JSON.parse(this.lbGroup)
        } catch (err) {
          group = this.lbGroup
        }

        let clan

        try {
          clan = JSON.parse(this.lbClan)
        } catch (err) {
          clan = this.lbClan
        }

        let payload = {
          focus: this.lbFocus,
          'activity-mode': this.lbMode,
          'activity-stat': this.lbStat,
          class: this.lbClass,
          group: group,
          clan: clan
        }

        let url = 'https://lb.dad2cl3.net/get-leaderboard'
        axios.post(url, payload)
          .then(response => {
            let lbData = response.data

            let headers = lbData.leaderboard.headers
            let newHeaders = []

            headers.forEach(function fixHeaders (header) {
              let newHeader = {
                text: header,
                align: 'center',
                sortable: false,
                value: header
              }
              newHeaders.push(newHeader)
            })

            lbData.leaderboard.headers = newHeaders
            this.lbData = lbData

            let rankings = lbData.leaderboard.rankings
            let newRankings = []

            rankings.forEach(function fixRankings (ranking) {
              let keys = Object.keys(ranking)

              let newRanking = {
                value: false
              }

              keys.forEach(function readKeys (key) {
                newRanking[key] = ranking[key]
              })

              newRankings.push(newRanking)
            })

            lbData.leaderboard.rankings = newRankings
          })
      },
      reset () {
        this.lbData = null
      }
    },
    beforeMount () {
      let url = 'https://lb.dad2cl3.net/get-criteria'

      axios.get(url, {params: {lookup: 'groups'}})
        .then(response => {
          this.groups.push(response.data.groups[0])
        })
    }
  }
</script>

<style scoped>
</style>
