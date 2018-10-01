<template>
  <!-- <v-container class="pa-0"> -->
    <v-layout align-center justify-center justify-space-around row wrap>
      <!-- <LoadingDialog :isLoading="isLoading"></LoadingDialog> -->
      <!-- <v-flex xs12 sm8 lg6 xl4 class="ma-2" v-if="articles.length > 0" v-for="(article, i) in articles" :key="i">
        <NewsArticle :article="article"></NewsArticle>
      </v-flex>
      <v-flex xs12 sm8 lg6 xl4 class="ma-2">
        <RandomGuardian :profile="guardianProfile"></RandomGuardian>
      </v-flex> -->
      <v-card class="pa-2" tile>
        <!-- <v-img class="backgroundImage" src="https://www.bungie.net/img/destiny_content/pgcr/social_traveler.jpg" gradient="to top,rgba(0,0,0,0.6), rgba(0,0,0,0.6)" contain> -->
          <v-container fluid grid-list-xl fill-height>
            <v-layout row justify-center wrap>
              <!-- <v-flex class="ma-2" v-for="(milestone, i) in milestones" :key="i"> -->
                <Milestone :milestone="milestone" v-for="(milestone, i) in milestones" :key="i"></Milestone>
              <!-- </v-flex> -->
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
      <!-- <v-flex xs12 sm8 lg6 xl4 class="ma-2">
        <GrimoireLoreCard v-if="randomLoreType === 'Grimoire'" :card="randomLore"></GrimoireLoreCard>
        <ItemLoreCard v-if="randomLoreType === 'Inventory'" :item="randomLore"></ItemLoreCard>
        <RecordsLoreCard v-if="randomLoreType === 'Record'" :card="randomLore"></RecordsLoreCard>
      </v-flex> -->
    </v-layout>
  <!-- </v-container> -->
</template>

<script>
  import GrimoireLoreCard from '../components/grimoireLoreCard'
  import ItemLoreCard from '../components/itemLoreCard'
  import RecordsLoreCard from '../components/recordLoreCard'
  import NewsArticle from '../components/newsArticle'
  import RandomGuardian from '../components/randomGuardian'
  import Milestone from '../components/milestone'
  // import LoadingDialog from '../components/loadingDialog'

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
        randomLoreType: '',
        milestones: []
      }
    },
    components: {
      // LoadingDialog,
      GrimoireLoreCard,
      ItemLoreCard,
      RecordsLoreCard,
      NewsArticle,
      RandomGuardian,
      Milestone
    },
    methods: {},
    mounted () {
      // load data from the store
      this.articles = this.$store.state.articles
      this.guardianProfile = this.$store.state.guardianProfile
      this.milestones = this.$store.state.milestones

      /* let randomLore = this.$store.state.randomLore
      let randomLoreType = randomLore.item_type

      this.randomLoreType = randomLoreType
      this.randomLore = randomLore */
    } /* ,
    async fetch (context) {
      let store = context.store
      let url = `${process.env.API_ROOT_URL}/news`

      let articles = await context.$axios.get(url)
      store.commit('setArticles', articles.data)
    } */
  }
</script>

<style scoped>



</style>
