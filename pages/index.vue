<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="(item, i) in items" :key="i" height="80%" :src="item.src" transition="fade" reverse-transition="fade">
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
        ]
      }
    }
  }
</script>

<style scoped>
</style>
