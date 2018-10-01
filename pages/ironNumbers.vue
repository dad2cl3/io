<template>
  <v-container fluid grid-list-lg class="pa-2">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 md6 lg4 v-for="(chart, i) in charts" :key="i">
        <v-card class="elevation-10">
          <div class="container" v-if="">
            <div class="Chart" style="position: relative; display: block; margin: auto; height: 100; width: 100;">
              <pie-chart :data="chart.data" :options="chart.options"></pie-chart>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import PieChart from '~/plugins/pie'
  // import axios from 'axios'

  export default {
    data () {
      return {
        title: 'Iron Numbers',
        backgroundColors: [
          'rgba(255, 165, 0, 1)',
          'rgba(255, 0, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 0, 1)'
        ],
        charts: [],
        chartData: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: []
            }
          ]
        },
        chartOptions: {
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
            fontColor: 'rgb(255,255,255)',
            text: ''
          }
        }
      }
    },
    components: {
      PieChart
    },
    beforeMount () {
      // let backgroundColors = this.backgroundColors
      let targetStats = this.$store.state.targetStats
      let ironNumbers = this.$store.state.ironNumbers
      // console.log(JSON.stringify(ironNumbers))
      let self = this

      let charts = []

      targetStats.forEach(function buildChart (targetStat) {
      // for (let i = 0; i < targetStats.length; i++) {
        // console.log(`Building chart for ${targetStats[i]}`)
        console.log(`Building chart for ${targetStat}`)
        let chart = {
          data: self.chartData,
          options: self.chartOptions
        }

        // let stats = ironNumbers[targetStats[i]]
        let stats = ironNumbers[targetStat]

        // Set the data labels
        let dataPoints = stats.data.data.length
        console.log(`Number of data points: ${dataPoints}`)
        if (dataPoints > 4) {
          let labels = stats.data.labels
          let data = stats.data.data

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

          chart.data.labels = newLabels
          chart.data.datasets[0].data = newData
          chart.data.datasets[0].backgroundColor = self.backgroundColors.slice(0, newLabels.length)
        } else {
          chart.data.labels = stats.data.labels
          // Set the data
          chart.data.datasets[0].data = stats.data.data
          // Set the background color for each data point
          chart.data.datasets[0].backgroundColor = self.backgroundColors.slice(0, chart.data.labels.length)
        }
        // Set the title
        let title = ''
        if (targetStat === 'clan_frequency') {
          title = '...is pretty active'
          // } else if ((targetStat === 'clan_classes') || (targetStat === 'clan_characters') || (targetStat === 'clan_activities')) {
        } else {
          let maxValue = 0
          let maxValuePos = 0
          for (let i = 0; i < stats.data.data.length; i++) {
            if (stats.data.data[i] > maxValue) {
              maxValue = stats.data.data[i]
              maxValuePos = i
            }
          }
          // console.log(maxValuePos)
          // console.log(chart.options)
          switch (targetStat) {
            case 'clan_characters':
              title = `...regularly plays ${stats.data.labels[maxValuePos]} characters`
              break
            case 'clan_classes':
              title = `...is partial to ${stats.data.labels[maxValuePos].toLowerCase()}s`
              break
            case 'clan_activities':
              title = `...prefers ${stats.data.labels[maxValuePos]}`
              break
            case 'best_pve_weapons':
              title = `... likes ${stats.data.labels[maxValuePos].toLowerCase()}s in PvE`
              break
            case 'best_pvp_weapons':
              title = `...and wrecks with ${stats.data.labels[maxValuePos].toLowerCase()}s in PvP.`
              break
          }
        }
        chart.options.title.text = title
        charts.push(JSON.parse(JSON.stringify(chart)))
        // self.charts.push(chart)
      })

      this.charts = charts
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
        let data = await context.$axios.get(url, { params })
        let stats = {}
        stats.data = data.data
        stats.type = targetStats[i]
        store.commit('setIronNumbers', stats)
      }
    }
  }
</script>
