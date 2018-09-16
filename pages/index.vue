<template>
  <!-- <v-container class="pa-0"> -->
    <v-layout align-center justify-center justify-space-around row wrap>
      <!-- <v-flex xs12 sm8 lg6 xl4 class="ma-2" v-if="articles.length > 0" v-for="(article, i) in articles" :key="i">
        <NewsArticle :article="article"></NewsArticle>
      </v-flex> -->
      <v-flex xs12 sm8 lg6 xl4 class="ma-2">
        <RandomGuardian :profile="guardianProfile"></RandomGuardian>
      </v-flex>
      <!-- <v-flex xs12 sm8 lg6 xl4 class="ma-2">
        <GrimoireLoreCard v-if="randomLoreType === 'Grimoire'" :card="randomLore"></GrimoireLoreCard>
        <ItemLoreCard v-if="randomLoreType === 'Inventory'" :item="randomLore"></ItemLoreCard>
        <RecordsLoreCard v-if="randomLoreType === 'Record'" :card="randomLore"></RecordsLoreCard>
      </v-flex> -->
    </v-layout>
  <!-- </v-container> -->
</template>

<script>
  // import axios from 'axios'
  import GrimoireLoreCard from '../components/grimoire-lore-card'
  import ItemLoreCard from '../components/item-lore-card'
  import RecordsLoreCard from '../components/records-lore-card'
  import NewsArticle from '../components/news-article'
  import RandomGuardian from '../components/random-guardian'

  export default {
    data () {
      return {
        isGrimoire: false,
        card: {},
        isLore: false,
        item: {},
        articles: [],
        guardianProfile: {},
        randomLore: {},
        randomLoreType: ''
      }
    },
    components: {
      GrimoireLoreCard,
      ItemLoreCard,
      RecordsLoreCard,
      NewsArticle,
      RandomGuardian
    },
    methods: {},
    beforeMount () {
      this.articles = this.$store.state.articles
      this.guardianProfile = this.$store.state.guardianProfile

      let randomLore = this.$store.state.randomLore
      let randomLoreType = randomLore.item_type

      this.randomLoreType = randomLoreType
      this.randomLore = randomLore
    }
  }
</script>

<style scoped>



</style>
