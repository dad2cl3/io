<template>
  <v-container fluid grid-list-lg class="pa-2">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 md6 lg4>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container" v-if="frequencyLoaded">
            <div class="Chart" style="position: relative; display: block; margin: auto; height: 100; width: 100;">
              <pie-chart :data="lastSeen" :options="lastSeenOptions"></pie-chart>
            </div>
          </div>
          <!-- </v-card-media> -->
          <!-- <v-card-title primary-title>
            <div>
              <h3 class="headline">Some Title</h3>
            </div>
          </v-card-title> -->
        </v-card>
      </v-flex>
    <!-- </v-layout>
    <v-layout row wrap justify-center> -->
      <v-flex xs12 sm6 md6 lg4>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container" v-if="charactersLoaded">
            <div class="Chart" style="position: relative; display: block; margin: auto; height: 100; width: 100;">
              <pie-chart :data="characters" :options="characterOptions"></pie-chart>
            </div>
          </div>
          <!-- </v-card-media> -->
          <!-- <v-card-title primary-title>
            <div>
              <h3 class="headline">Some Title</h3>
            </div>
          </v-card-title> -->
        </v-card>
      </v-flex>
    <!-- </v-layout>
    <v-layout row wrap justify-center> -->
      <v-flex xs12 sm6 md6 lg4>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container" v-if="classesLoaded">
            <div class="Chart" style="position: relative; display: block; margin: auto; height: 100; width: 100;">
              <pie-chart :data="classes" :options="classesOptions"></pie-chart>
            </div>
          </div>
          <!-- </v-card-media> -->
          <!-- <v-card-title primary-title>
            <div>
              <h3 class="headline">Some Title</h3>
            </div>
          </v-card-title> -->
        </v-card>
      </v-flex>
    <!-- </v-layout>
    <v-layout row wrap justify-center> -->
      <v-flex xs12 sm6 md6 lg4>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container" v-if="modeLoaded">
            <div class="Chart" style="position: relative; display: block; margin: auto; height: 100; width: 100;">
              <pie-chart :data="modes" :options="modeOptions"></pie-chart>
            </div>
          </div>
          <!-- </v-card-media> -->
          <!-- <v-card-title primary-title>
            <div>
              <h3 class="headline">Some Title</h3>
            </div>
          </v-card-title> -->
        </v-card>
      </v-flex>
    <!-- </v-layout>
    <v-layout row wrap justify-center> -->
      <v-flex xs12 sm6 md6 lg4>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container" v-if="bestPveWeaponsLoaded">
            <div class="Chart" style="position: relative; display: block; margin: auto; height: 100; width: 100;">
              <pie-chart :data="bestPvEWeapons" :options="bestPveWeaponsOptions"></pie-chart>
            </div>
          </div>
          <!-- </v-card-media> -->
          <!-- <v-card-title primary-title>
            <div>
              <h3 class="headline">Some Title</h3>
            </div>
          </v-card-title> -->
        </v-card>
      </v-flex>
    <!-- </v-layout>
    <v-layout row wrap justify-center> -->
      <v-flex xs12 sm6 md6 lg4>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container" v-if="bestPvPWeaponsLoaded">
            <div class="Chart" style="position: relative; display: block; margin: auto; height: 100; width: 100;">
              <pie-chart :data="bestPvPWeapons" :options="bestPvPWeaponsOptions"></pie-chart>
            </div>
          </div>
          <!-- </v-card-media> -->
          <!-- <v-card-title primary-title>
            <div>
              <h3 class="headline">Some Title</h3>
            </div>
          </v-card-title> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import PieChart from '~/plugins/pie'
  import axios from 'axios'

  export default {
    data () {
      return {
        title: 'Iron Numbers',
        targetStats: [],
        modes: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 99, 132, 1)'
              ]
            }
          ]
        },
        modeOptions: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 5
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 10,
              fontColor: 'rgb(255, 255, 255)',
              fontFamily: 'Roboto'
            }
          },
          title: {
            display: true,
            position: 'top',
            fontSize: 24,
            fontStyle: 'normal',
            fontFamily: 'Roboto',
            fontColor: 'rgb(255, 255, 255)',
            text: '...definitely prefers PvP...'
          }
        },
        modeLoaded: false,
        lastSeen: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(255, 99, 132, 1)'
              ]
            }
          ]
        },
        lastSeenOptions: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 5
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 10,
              fontFamily: 'Roboto',
              fontColor: 'rgb(255,255,255)'
            }
          },
          title: {
            display: true,
            position: 'top',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontColor: 'rgb(255,255,255)',
            fontSize: 24,
            text: '...is pretty active...'
          }
        },
        frequencyLoaded: false,
        classes: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)'
              ]
            }
          ]
        },
        classesOptions: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 5
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontFamily: 'Roboto',
              fontColor: 'rgb(255,255,255)'
            }
          },
          title: {
            display: true,
            position: 'top',
            fontSize: 24,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontColor: 'rgb(255,255,255)',
            text: '...is a bit partial to titans...'
          }
        },
        classesLoaded: false,
        characters: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)'
              ]
            }
          ]
        },
        characterOptions: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 5
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              boxWidth: 10,
              fontColor: 'rgb(255,255,255)',
              fontFamily: 'Roboto'
            }
          },
          title: {
            display: true,
            position: 'top',
            fontSize: 24,
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontColor: 'rgb(255,255,255)',
            text: '...plays three characters...'
          }
        },
        charactersLoaded: false,
        bestPvEWeapons: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 0, 0, 1)'
              ]
            }
          ]
        },
        bestPveWeaponsOptions: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 5
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: 'rgb(255,255,255)'
            }
          },
          title: {
            display: true,
            position: 'top',
            fontSize: 24,
            fontStyle: 'normal',
            fontColor: 'rgb(255,255,255)',
            text: '...loves auto rifles in PvE...'
          }
        },
        bestPveWeaponsLoaded: false,
        bestPvPWeapons: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 0, 0, 1)'
              ]
            }
          ]
        },
        bestPvPWeaponsOptions: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 5
          },
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: 'rgb(255,255,255)'
            }
          },
          title: {
            display: true,
            position: 'top',
            fontSize: 24,
            fontColor: 'rgb(255,255,255)',
            fontStyle: 'normal',
            text: '...and PvP.'
          }
        },
        bestPvPWeaponsLoaded: false
      }
    },
    components: {
      PieChart
    },
    mounted () {
      let ironNumbers = this.$store.state.ironNumbers
      // console.log(ironNumbers)
      let url = 'https://io.dad2cl3.net/stats'
      /*
      let params = {
        stats: 'clan_activities'
      }

      axios.get(url, { params })
        .then(response => {
          this.modes.labels = response.data.labels
          this.modes.datasets[0].data = response.data.data
          this.modeLoaded = true
        }) */
      // Get the activity stats from the store
      let activityStats = ironNumbers.clan_activities
      this.modes.labels = activityStats.data.labels
      this.modes.datasets[0].data = activityStats.data.data
      this.modeLoaded = true

      /* let params = {
        stats: 'clan_characters'
      }

      axios.get(url, { params })
        .then(response => {
          this.characters.labels = response.data.labels
          this.characters.datasets[0].data = response.data.data
          this.charactersLoaded = true
        }) */

      activityStats = ironNumbers.clan_characters
      this.characters.labels = activityStats.data.labels
      this.characters.datasets[0].data = activityStats.data.data
      this.charactersLoaded = true

      let params = {
        stats: 'clan_classes'
      }

      axios.get(url, { params })
        .then(response => {
          this.classes.labels = response.data.labels
          this.classes.datasets[0].data = response.data.data
          this.classesLoaded = true
        })

      params = {
        stats: 'clan_frequency'
      }

      axios.get(url, { params })
        .then(response => {
          let labels = response.data.labels

          labels.forEach((label) => {
            this.lastSeen.labels.push(label.substring(3))
          })
          // this.lastSeen.labels = response.data.labels
          this.lastSeen.datasets[0].data = response.data.data
          this.frequencyLoaded = true
        })

      params = {
        stats: 'best_pve_weapons'
      }

      axios.get(url, { params })
        .then(response => {
          let stats = response.data
          let labels = stats.labels
          let data = stats.data

          let limit = 4
          let others = 0

          let newLabels = []
          let newData = []

          for (let i = 0; i < labels.length; i++) {
            if (i < limit) {
              newLabels.push(labels[i])
              newData.push(data[i])
            } else {
              others += data[i]
            }
          }

          newLabels.push('Others')
          newData.push(others)

          this.bestPvEWeapons.labels = newLabels
          this.bestPvEWeapons.datasets[0].data = newData
          this.bestPveWeaponsLoaded = true
        })

      params = {
        stats: 'best_pvp_weapons'
      }

      axios.get(url, { params })
        .then(response => {
          let stats = response.data
          let labels = stats.labels
          let data = stats.data

          let limit = 4
          let others = 0

          let newLabels = []
          let newData = []

          for (let i = 0; i < labels.length; i++) {
            if (i < limit) {
              newLabels.push(labels[i])
              newData.push(data[i])
            } else {
              others += data[i]
            }
          }

          newLabels.push('Others')
          newData.push(others)

          this.bestPvPWeapons.labels = newLabels
          this.bestPvPWeapons.datasets[0].data = newData
          this.bestPvPWeaponsLoaded = true
        })
    },
    head () {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Iron Orange By The Numbers'
          }
        ]
      }
    },
    async fetch (context) {
      // console.log(targetStats.length)
      let store = context.store
      let targetStats = store.state.targetStats
      let url = `${process.env.API_ROOT_URL}/stats`

      for (let i = 0; i < targetStats.length; i++) {
        console.log(`Loading target stat: ${targetStats[i]}`)
        let params = {
          stats: `${targetStats[i]}`
        }
        // console.log(params)
        let data = await axios.get(url, { params })
        let stats = {}
        stats.data = data.data
        stats.type = targetStats[i]
        store.commit('setIronNumbers', stats)
      }
    }
  }
</script>
