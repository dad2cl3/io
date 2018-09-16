<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="orange" fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-xl class="default-container pa-0">
        <nuxt />
      </v-container>
    </v-content>
    <v-footer height="auto" color="orange" :fixed="fixed" app>
      <v-container fluid class="pa-1">
        <v-layout row justify-center wrap>
          <a v-for="(accounts, i) in social" :key="i" :href=accounts.url target="_blank" style="text-decoration-line: none;">
            <v-btn icon>
              <v-icon size="24px">{{ accounts.icon }}</v-icon>
            </v-btn>
          </a>
          <v-flex xs12 text-xs-center>&copy; 2018 - <strong>dad2cl3</strong></v-flex>
        </v-layout>
        <!-- <v-layout row justify-center>
          <span>&copy; 2018 - <strong>dad2cl3</strong></span>
        </v-layout> -->
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        isLoaded: false,
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'message', title: 'Iron Code', to: '/iron-code' },
          { icon: 'pie_chart', title: 'Iron Numbers', to: '/iron-numbers' },
          { icon: 'person', title: 'Iron Crew', to: '/iron-crew' },
          { icon: 'collections', title: 'Iron Lore', to: '/iron-lore' },
          { icon: 'assessment', title: 'Iron Application', to: '/iron-application' }
        ],
        icons: ['fa-facebook', 'fa-twitter', 'fa-instagram', 'fa-discord'],
        social: [
          {
            url: 'https://www.facebook.com/groups/ironorange/',
            icon: 'fa-facebook'
          },
          {
            url: 'https://twitter.com/TheIOClan',
            icon: 'fa-twitter'
          },
          {
            url: 'https://www.instagram.com/ironorangeclan/',
            icon: 'fa-instagram'
          },
          {
            url: 'https://discord.gg/uNXJD83',
            icon: 'fa-discord'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Iron Orange'
      }
    }
  }
</script>
