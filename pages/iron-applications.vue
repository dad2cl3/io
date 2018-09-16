<template>
  <v-container class="pa-0">
    <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1" :pagination.sync="pagination" must-sort>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.appDate }}</td>
        <td>{{ props.item.appName }}</td>
        <td>{{ props.item.gamertag }}</td>
        <!-- <td class="text-xs-center"><v-btn flat small color="orange" @click.stop="dialog = true" @click="setAppId(props.item.appId)">View Application</v-btn></td> -->
        <td class="text-xs-center">
          <nuxt-link :to="`/iron-application/${props.item.appId}`" style="color: orange; text-decoration: none;">View Application</nuxt-link>
        </td>
      </template>
    </v-data-table>
    <!-- <v-dialog v-model="dialog" max-width="300px" v-if="appDoc!=null">
      <v-card tile>
        <v-card-title primary-title>{{ appDoc.gamertag }}</v-card-title>
        <v-card-media src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/xlarge/public/field/image/2017/12/Destiny-2-e1490639926995_0.jpg?itok=xulShj7J" height="200px"></v-card-media>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn flat small color="orange" block @click.stop="resetAppId">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script>
  // import axios from 'axios'

  export default {
    data () {
      return {
        dialog: false,
        appId: null,
        appDoc: null,
        pagination: {
          descending: true,
          rowsPerPage: -1
        },
        headers: [
          {
            text: 'Application Date',
            align: 'left',
            sortable: true,
            value: 'appDate'
          },
          {
            text: 'Applicant',
            sortable: true,
            value: 'appName'
          },
          {
            text: 'Gamertag',
            sortable: true,
            value: 'gamertag'
          },
          {
            text: 'Application Link',
            align: 'center',
            sortable: false,
            value: 'fourth'
          }
        ],
        items: [
        ]
      }
    },
    methods: {
      /* setAppId (appId) {
        this.dialog = true
        this.appId = appId
        let params = {
          app_id: appId
        }

        let url = `${process.env.API_ROOT_URL}/applications`

        axios.get(url, { params })
          .then(response => {
            console.log(response.data)

            this.appDoc = response.data
          })
      },
      resetAppId () {
        this.dialog = false
        this.appId = null
        // this.appDoc = null
      } */
    },
    mounted () {
      let applications = this.$store.state.ironApps
      let items = []

      applications.forEach(function readApps (app) {
        let item = {
          value: true,
          appId: app.app_id,
          appDate: app.app_date,
          appName: app.app_doc.applicant_name,
          gamertag: app.app_doc.gamertag
        }

        items.push(item)
      })
      this.items = items
    },
    async fetch (context) {
      let params = {
        app_id: 'all'
      }

      let store = context.store
      let url = `${process.env.API_ROOT_URL}/applications`

      let applications = await context.$axios.get(url, { params })
      store.commit('setIronApps', applications.data)
    }
  }
</script>