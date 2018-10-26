<template>
  <v-card dark raised>
    <v-card-title>Members
      <v-spacer></v-spacer>
      <v-select :items="clans" v-model="search"></v-select>
    </v-card-title>
    <v-data-table :headers=headers :items="members" :search="search" :rows-per-page-items="rowsPerPageItems">
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.clan_name }}</td>
        <td class="text-xs-center">{{ props.item.gamertag }}</td>
        <td class="text-xs-center">{{ setPlatform(props.item.platform) }}</td>
        <td :value="props.item.last_played" class="text-xs-center">{{ setDateTimeFormat(props.item.last_played) }}</td>
        <td :value="props.item.minutes_played_total" class="text-xs-center">{{ timeWasted(props.item.minutes_played_total) }}</td>
        <td :value="props.item.versions_owned" class="text-xs-center">{{ props.item.versions_owned }}</td>
        <td :value="props.item.added" class="text-xs-center">{{ setDateFormat(props.item.added) }}</td>
        <!-- <td :value="props.item.deleted" class="text-xs-center">{{ setDateFormat(props.item.deleted) }}</td> -->
        <td :value="props.item.admin_flag" class="text-xs-center">{{ isAdmin(props.item.admin_flag) }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        isLoading: true,
        clans: [],
        members: [],
        rowsPerPageItems: [25, 50, 100],
        pagination: {
          rowsPerPage: -1
        },
        headers: [
          {
            text: 'Clan',
            align: 'center',
            value: 'clan_name'
          },
          {
            text: 'Gamertag',
            align: 'center',
            value: 'gamertag'
          },
          {
            text: 'Platform',
            align: 'center',
            value: 'platform'
          },
          {
            text: 'Last Played',
            align: 'center',
            value: 'last_played'
          },
          {
            text: 'Time Wasted',
            align: 'center',
            value: 'minutes_played_total'
          },
          {
            text: 'Version Owned',
            align: 'center',
            value: 'versions_owned'
          },
          {
            text: 'Joined',
            align: 'center',
            value: 'added',
            sortable: true
          },
          {
            text: 'Admin',
            align: 'center',
            value: 'admin_flag'
          }
        ],
        search: ''
      }
    },
    components: {},
    methods: {
      timeWasted (totalMinutes) {
        let daysWasted = Math.floor(totalMinutes / 24 / 60)
        let hoursWasted = Math.floor(totalMinutes / 60 % 24)
        let minutesWasted = totalMinutes % 60

        return `${daysWasted}d ${hoursWasted}h ${minutesWasted}m`
      },
      setDateFormat (stringDate) {
        if (stringDate !== null) {
          let splitDate = stringDate.split('-')
          let newDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0]

          return newDate
        }
      },
      setDateTimeFormat (stringDateTime) {
        let localDateTime = new Date(stringDateTime)

        let formattedDateTime = `${localDateTime.toLocaleDateString('en-US')} ${localDateTime.toLocaleTimeString('en-US')}`
        return formattedDateTime
      },
      setPlatform (platform) {
        if (platform === 1) {
          return 'XBox'
        } else if (platform === 2) {
          return 'PlayStation'
        } else if (platform === 4) {
          return 'Battle.net'
        }
      },
      isAdmin (adminFlag) {
        if (adminFlag) {
          return 'Yes'
        } else {
          return 'No'
        }
      }
    },
    beforeMount () {
      this.clans = this.$store.state.adminList.clans
      this.members = this.$store.state.adminList.members
    },
    async fetch (context) {
      let store = context.store
      let url = `${process.env.API_ROOT_URL}/admin/members`

      let adminList = await context.$axios.get(url)
      store.commit('setAdminList', adminList.data)
    }
  }
</script>

<style scoped>

</style>
