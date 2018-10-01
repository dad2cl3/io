<template>
  <v-flex class="grimoire-card">
    <v-card dark raised class="grimoire-card">
      <v-responsive aspect-ratio="16/9">
        <v-container class="pa-1 ma-1">
          <v-layout row>
            <v-flex xs7>
              <p class="item-name ma-0">{{ card.item_name }}</p>
              <span class="item-subtitle">{{ card.lore_subtitle }}</span>
            </v-flex>
            <v-flex xs5 text-xs-center>
              <img class="card-image" :src="card.item_screenshot"></img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-responsive>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="showLoreDetail = true" color="orange">Lore</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="showLoreDetail" width="75%">
      <v-card>
        <v-card-title primary-title class="headline">{{ card.item_name }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="ma-0">
          <samp class="ma-0 lore-pre">
            <span class="ma-0 lore-span">{{ card.lore_description }}</span>
          </samp>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="showLoreDetail = false" color="orange">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>

<script>
  export default {
    props: ['card'],
    data () {
      return {
        showLoreDetail: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

  .grimoire-card {
    max-width: 400px;
  }

  .card-image {
    width: 100px;
  }

  .item-name {
    position: relative;
    color: white;
    font-size: 1.25rem;
    font-weight: bold;
    left: 2%;
  }

  .item-subtitle {
    position: relative;
    color: white;
    font-size: 1.0rem;
    font-style: italic;
    width: 40%;
    left: 2%;
  }

  .lore-pre {
    white-space: pre-wrap;
  }

  .lore-span {
    font-family: Roboto;
    display: block;
  }

  @media all and (max-width: 425px) {
    .item-name {
      position: relative;
      color: white;
      font-size: 1.0rem;
      font-weight: bold;
    }

    .item-subtitle {
      position: relative;
      color: white;
      font-size: 0.7rem;
      font-style: italic;
      width: 40%;
    }
  }
</style>