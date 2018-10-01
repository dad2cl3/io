<template>
  <v-flex class="pa-0 ma-2 item-card">
    <v-card dark raised class="item-card">
        <v-container class="item-container ma-0 pa-0">
          <!-- <img class="item-screenshot" :src="item.item_screenshot"> -->
          <v-img class="item-screenshot" :src="item.item_screenshot"></v-img>
          <v-container class="item-details ma-2 pa-0">
            <p class="item-name ma-0">{{ item.item_name }}</p>
            <p class="item-subtitle">{{ item.lore_subtitle }}</p>
          </v-container>
        </v-container>
      <!-- <v-card-title class="pa-1 ma-1">
        <div>
          <pre class="lore-pre"><span class="lore-span">{{ item.lore_description.slice(0, 196) }}...</span></pre>
        </div>
      </v-card-title> -->
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="showLoreDetail = true" color="orange">Lore</v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-dialog v-model="showLoreDetail" width="325px"> -->
    <v-dialog v-model="showLoreDetail" width="75%">
      <v-card>
        <v-card-title primary-title class="headline">{{ item.item_name }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="ma-0">
          <samp class="ma-0 lore-pre">
            <span class="ma-0 lore-span">{{ item.lore_description }}</span>
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
    props: ['item'],
    data () {
      return {
        showLoreDetail: false
      }
    }
  }
</script>

<style scoped>

  .item-card {
    width: 400px;
  }

  .item {
    position: relative;
  }

  .item-container {
    position: relative;
    height: 225px;
    width: 400px;
  }

  .item-screenshot {
    width: 400px;
    height: 225px;
  }

  .item-details {
    position: absolute;
    top: 0%;
  }

  .item-name {
    position: relative;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .item-subtitle {
    position: relative;
    color: white;
    font-size: 1.0rem;
    font-style: italic;
    width: 40%;
  }

  .lore-pre {
    white-space: pre-wrap;
  }

  .lore-span {
    font-family: Roboto;
    display: block;
  }

  @media all and (max-width: 425px) {
    .item-card {
      max-width: 275px;
    }

    .item-container {
      position: relative;
      width: 275px;
      height: 155px;
    }

    .item-screenshot {
      width: 275px;
      height: 155px;
    }

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