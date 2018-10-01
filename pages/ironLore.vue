<template>
  <v-card class="ma-2" dark raised>
    <v-card-title>
      <v-flex xs12 sm6 md4>
        <v-text-field clearable prepend-icon="search" label="Enter Search" v-model="searchString"
                      @keyup.enter="search()"></v-text-field>
      </v-flex>
    </v-card-title>
    <v-divider v-show="isLoaded"></v-divider>
    <v-container v-show="isLoaded">
      <v-tabs>
        <v-tabs-slider color="orange"></v-tabs-slider>
        <v-tab v-for="(loreType, i) in lore.types" :key="i"><span
                :class="tabLabelClass[loreType]">{{ loreType }}</span></v-tab>
        <v-tab-item v-for="(loreType, i) in lore.types" :key="i">
          <v-container fluid grid-list-xl>
            <v-layout row wrap justify-center>
              <ItemLoreCard v-if="loreType === 'inventory'" v-for="(item, i) in lore.lore[loreType]" :item="item"
                            :key="i"></ItemLoreCard>
              <GrimoireLoreCard v-if="loreType === 'grimoire'" v-for="(card, i) in lore.lore[loreType]"
                                :card="card" :key="i"></GrimoireLoreCard>
              <RecordLoreCard v-if="loreType === 'records'" v-for="(card, i) in lore.lore[loreType]" :card="card"
                              :key="i"></RecordLoreCard>
            </v-layout>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </v-card>
</template>

<script>
  import ItemLoreCard from '../components/itemLoreCard'
  import GrimoireLoreCard from '../components/grimoireLoreCard'
  import RecordLoreCard from '../components/recordLoreCard'
  import ClientLoadingDialog from '../components/clientLoadingDialog'

  export default {
    components: { GrimoireLoreCard, ItemLoreCard, RecordLoreCard, ClientLoadingDialog },
    data () {
      return {
        grimoireLoaded: false,
        inventoryLoaded: false,
        recordsLoaded: false,
        searchString: null,
        tabLabelClass: {
          grimoire: 'no-lore-found',
          inventory: 'no-lore-found'
        },
        lore: {
          types: [
            'grimoire',
            'inventory',
            'records'
          ],
          lore: {
            grimoire: [],
            inventory: [],
            records: []
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
    computed: {
      isLoaded () {
        if ((this.grimoireLoaded) && (this.inventoryLoaded) && (this.recordsLoaded)) {
          this.$nuxt.$loading.finish()
          return true
        } else {
          // this.$nuxt.$loading.start()
          return false
        }
      }
    },
    methods: {
      async search () {
        this.$nuxt.$loading.start()
        this.lore.lore.grimoire = []
        this.lore.lore.inventory = []
        this.lore.lore.records = []

        let searchString = this.searchString
        console.log(searchString)

        let url = `${process.env.API_ROOT_URL}/discord/loresearch`
        console.log('Getting grimoire lore')
        // get the grimoire cards
        this.$axios.get(url, { params: { type: 'grimoire', search: searchString } })
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
            console.log('Retrieved grimoire lore')
            this.grimoireLoaded = true
          })

        console.log('Getting inventory lore')
        // get the inventory items
        this.$axios.get(url, { params: { type: 'inventory', search: searchString } })
          .then(response => {
            if (response.data.hasOwnProperty('inventory')) {
              this.lore.lore.inventory = response.data.inventory
              let inventoryCount = this.lore.lore.inventory.length
              // console.log(inventoryCount)
              if (inventoryCount > 0) {
                this.tabLabelClass['inventory'] = 'lore-found'
              } else {
                this.tabLabelClass['inventory'] = 'no-lore-found'
              }
            } else {
              this.lore.lore.inventory = this.troll
            }
            console.log('Retrieved inventory lore')
            this.inventoryLoaded = true
          })
        console.log('Getting records lore')
        // get the records items
        this.$axios.get(url, { params: { type: 'records', search: searchString } })
          .then(response => {
            if (response.data.hasOwnProperty('records')) {
              this.lore.lore.records = response.data.records
              let inventoryCount = this.lore.lore.records.length
              // console.log(inventoryCount)
              if (inventoryCount > 0) {
                this.tabLabelClass['records'] = 'lore-found'
              } else {
                this.tabLabelClass['records'] = 'no-lore-found'
              }
            } else {
              this.lore.lore.records = this.troll
            }
            console.log('Retrieved records lore')
            this.recordsLoaded = true
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
    color: orange;
  }

</style>