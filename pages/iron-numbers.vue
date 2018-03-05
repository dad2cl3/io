<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container">
            <div class="chart-container" style="position: relative; margin: auto; height: 60vh; width: 80vw;">
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
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container">
            <div class="chart-container" style="position: relative; margin: auto; height: 60vh; width: 80vw;">
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
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container">
            <div class="chart-container" style="position: relative; margin: auto; height: 60vh; width: 80vw;">
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
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container">
            <div class="chart-container" style="position: relative; margin: auto; height: 60vh; width: 80vw;">
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
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container">
            <div class="chart-container" style="position: relative; margin: auto; height: 60vh; width: 80vw;">
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
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex>
        <v-card class="elevation-10">
          <!-- <v-card-media> -->
          <div class="container">
            <div class="chart-container" style="position: relative; margin: auto; height: 60vh; width: 80vw;">
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

  export default {
    data () {
      return {
        modes: {
          labels: ['PvE', 'PvP'],
          datasets: [
            {
              data: [18908, 35770],
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 165, 0, 1)'
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
        lastSeen: {
          labels: ['Weekly', 'Monthly', 'Quarterly', 'Slackers'],
          datasets: [
            {
              data: [83, 31, 64, 27],
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
        classes: {
          labels: ['Hunter', 'Titan', 'Warlock'],
          datasets: [
            {
              data: [181, 196, 174],
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
            text: '...is partial to titans...'
          }
        },
        characters: {
          labels: ['Three', 'Two', 'One'],
          datasets: [
            {
              data: [161, 24, 20],
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
        bestPvEWeapons: {
          labels: ['Auto Rifle', 'Grenade', 'Hand Cannon', 'Melee', 'Pulse Rifle', 'Scout Rifle', 'Sidearm', 'Submachinegun', 'Super'],
          datasets: [
            {
              data: [256, 2, 54, 49, 9, 101, 2, 2, 3],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)'
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
        bestPvPWeapons: {
          labels: ['Auto Rifle', 'Scout Rifle', 'Pulse Rifle', 'Super', 'Submachinegun', 'Melee', 'Hand Cannon', 'Grenade', 'Sidearm'],
          datasets: [
            {
              data: [277, 48, 33, 14, 8, 7, 5, 2, 2],
              backgroundColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(0, 0, 255, 1)'
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
        }
      }
    },
    components: {
      PieChart
    }
  }
</script>
