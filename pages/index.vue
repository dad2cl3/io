<template>
  <v-carousel>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" transition="fade" reverse-transition="fade">
    </v-carousel-item>
  </v-carousel>
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
