<template>
  <v-container class="pa-0">
    <ClientLoadingDialog :isLoading="isLoading"></ClientLoadingDialog>
    <v-data-table :headers="headers" :items="items" hide-actions class="elevation-1" :pagination.sync="pagination" must-sort>
      <template slot="items" slot-scope="props">
        <td>{{ props.item.appDate }}</td>
        <td>{{ props.item.appName }}</td>
        <td>{{ props.item.gamertag }}</td>
        <!-- <td class="text-xs-center"><v-btn flat small color="orange" @click.stop="dialog = true" @click="setAppId(props.item.appId)">View Application</v-btn></td> -->
        <td class="text-xs-center">
          <nuxt-link :to="`/ironAdmin/ironApplication/${props.item.appId}`" style="color: orange; text-decoration: none;">View Application</nuxt-link>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import ClientLoadingDialog from '../../components/clientLoadingDialog'

  export default {
    components: { ClientLoadingDialog },
    data () {
      return {
        isLoading: true,
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
    },
    beforeMount () {
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
      this.isLoading = false
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