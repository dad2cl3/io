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
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!-- <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer height="auto" color="orange" :fixed="fixed" app>
      <v-container fluid>
        <v-layout row justify-center>
          <a v-for="(accounts, i) in social" :key="i" :href=accounts.url target="_blank" style="text-decoration-line: none;">
            <v-btn icon>
              <v-icon size="24px">{{ accounts.icon }}</v-icon>
            </v-btn>
          </a>
        </v-layout>
        <v-layout row justify-center>
          <span>&copy; 2018 - <strong>dad2cl3</strong></span>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'home', title: 'Home', to: '/' },
          { icon: 'pie_chart', title: 'Iron Numbers', to: '/iron-numbers' },
          { icon: 'message', title: 'Iron Code', to: '/iron-code' },
          { icon: 'assessment', title: 'Iron Application', to: '/iron-application' },
          { icon: 'person', title: 'Iron Crew', to: '/iron-crew' }
        ],
        icons: ['fa-facebook', 'fa-twitter', 'fa-instagram'],
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
