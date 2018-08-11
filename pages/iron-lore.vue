<template>
  <v-container class="ma-0 pa-0">
    <v-card dark raised>
      <v-card-title>
        <v-flex xs12 sm6 md4>
          <v-text-field clearable prepend-icon="search" label="Enter Search" v-model="searchString" @keyup.enter="search()"></v-text-field>
        </v-flex>
      </v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-layout row justify-center>
          <v-progress-circular color="orange" indeterminate v-show="isLoading"></v-progress-circular>
          <v-tabs v-show="isLoaded">
            <v-tabs-slider color="orange"></v-tabs-slider>
            <v-tab v-for="(loreType, i) in lore.types" :key="i"><span :class="tabLabelClass[loreType]">{{ loreType }}</span></v-tab>
            <v-tab-item v-for="(loreType, i) in lore.types" :key="i">
              <v-container fluid grid-list-xl>
                <v-layout row wrap justify-center>
                  <ItemLoreCard v-if="loreType === 'inventory'" v-for="(item, i) in lore.lore[loreType]" :item="item" :key="i"></ItemLoreCard>
                  <GrimoireLoreCard v-if="loreType === 'grimoire'" v-for="(card, i) in lore.lore[loreType]" :card="card" :key="i"></GrimoireLoreCard>
                </v-layout>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-layout>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  import ItemLoreCard from '../components/item-lore-card'
  import GrimoireLoreCard from '../components/grimoire-lore-card'
  import axios from 'axios'

  export default {
    components: {GrimoireLoreCard, ItemLoreCard},
    data () {
      return {
        isLoading: false,
        isLoaded: false,
        searchString: null,
        tabLabelClass: {
          grimoire: 'no-lore-found',
          inventory: 'no-lore-found'
        },
        lore: {
          types: [
            'grimoire',
            'inventory'
          ],
          lore: {
            grimoire: [],
            inventory: []
          }
        },
        troll: [
          {
            item_description: 'Best jump in the game!',
            item_icon: 'https://s3.amazonaws.com/dad2cl3-manifest/public/troll.jpg',
            item_name: 'Warlocks',
            item_screenshot: 'https://s3.amazonaws.com/dad2cl3-manifest/public/troll.jpg',
            lore_description: 'Best jump in the game! - GreatDaemon',
            lore_name: 'Warlocks',
            lore_subtitle: 'Best jump in the game! - GreatDaemon'
          }
        ]
      }
    },
    methods: {
      search () {
        this.isLoading = true
        this.isLoaded = false

        this.lore.lore.grimoire = []
        this.lore.lore.inventory = []

        let searchString = this.searchString
        console.log(searchString)

        let url = 'https://io.dad2cl3.net/discord/loresearch'

        // get the grimoire cards
        axios.get(url, {params: { type: 'grimoire', search: searchString }})
          .then(response => {
            if (response.data.hasOwnProperty('grimoire')) {
              this.lore.lore.grimoire = response.data.grimoire
              let grimoireCount = this.lore.lore.grimoire.length
              // console.log(grimoireCount)
              if (grimoireCount > 0) {
                this.tabLabelClass['grimoire'] = 'lore-found'
              } else {
                this.tabLabelClass['grimoire'] = 'no-lore-found'
              }
            } else {
              this.lore.lore.grimoire = this.troll
            }
            // console.log(this.lore.lore.grimoire)
            this.isLoading = false
            this.isLoaded = true
          })

        // get the inventory items
        axios.get(url, {params: { type: 'inventory', search: searchString }})
          .then(response => {
            if (response.data.hasOwnProperty('inventory')) {
              this.lore.lore.inventory = response.data.inventory
              if (this.lore.lore.inventory !== {}) {
                let inventoryCount = this.lore.lore.inventory.length
                // console.log(inventoryCount)
                if (inventoryCount > 0) {
                  this.tabLabelClass['inventory'] = 'lore-found'
                } else {
                  this.tabLabelClass['inventory'] = 'no-lore-found'
                }
              }
            }
          })
      }
    },
    mounted () {
      // this.search()
    }
  }
</script>

<style scoped>

  .no-lore-found {
    color: white;
  }

  .lore-found {
    color: yellow;
  }

</style>