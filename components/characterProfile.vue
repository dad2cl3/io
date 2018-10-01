<template>
  <v-container class="ma-0 pa-0 local-container" fluid grid-list-xl>
    <v-card flat class="ma-0 pa-0">
      <v-container class="ma-0 pa-0" fluid>
        <v-layout class="ma-0" row wrap justify-center justify-space-around>
          <!-- left column -->
          <v-card flat class="ma-0 py-0 item-group">
            <div class="item-container">
              <div class="item ma-1 py-2" v-for='(item, i) in character.items.slice(0,6)' :key='item.instance_id'>
                <v-layout row>
                  <div class='item-icon-container'>
                    <img class="item-icon" :src='`${item.item_icon}`'></img>
                    <v-layout row class='mx-0 my-0'>
                      <!-- <img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></img> -->
                      <v-img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></v-img>
                      <div class='item-light'>{{ item.stat_light }}</div>
                    </v-layout>
                  </div>
                  <div class='item-details'>
                    <div class='item-name'>{{ item.item_name }}</div>
                    <div class='item-type'>{{ item.bucket_name }}</div>
                    <v-layout row class="item-sockets-container">
                      <div class='item-sockets' v-for='socket in item.sockets' :key='socket.socket_name'>
                        <v-img class='item-socket' :src='`${socket.socket_icon}`' :title='`${socket.socket_name}`'></v-img>
                      </div>
                    </v-layout>
                  </div>
                </v-layout>
              </div>
            </div>
          </v-card>
          <!-- right column -->
          <v-card flat class="ma-0 py-0 item-group">
            <div class="item-container">
              <div class="item ma-1 py-2" v-for='(item, i) in character.items.slice(6,12)' :key='item.instance_id'>
                <v-layout row>
                  <div class='item-icon-container'>
                    <img class="item-icon" :src='`${item.item_icon}`'></img>
                    <!-- <v-img class="item-icon" :src='`${item.item_icon}`'></v-img> -->
                    <v-layout row class='mx-0 my-0'>
                      <!-- <img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></img> -->
                      <v-img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></v-img>
                      <div class='item-light'>{{ item.stat_light }}</div>
                    </v-layout>
                  </div>
                  <div class='item-details'>
                    <div class='item-name'>{{ item.item_name }}</div>
                    <div class='item-type'>{{ item.bucket_name }}</div>
                    <v-layout row class="item-sockets-container" align-start>
                      <div class='item-sockets' v-for='socket in item.sockets' :key='socket.socket_name'>
                        <!-- <img class='item-socket' :src='`${socket.socket_icon}`' :title='`${socket.socket_name}`'></img> -->
                        <v-img class='item-socket' :src='`${socket.socket_icon}`' :title='`${socket.socket_name}`'></v-img>
                      </div>
                    </v-layout>
                  </div>
                </v-layout>
              </div>
            </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-card>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: ['character']
  }
</script>

<style scoped>

  .item {
    position: relative;
    padding: 0em;
    margin: 1em;
    height: 96px;
    width: 450px;
    border: 0;
    background-color: orange;
  }

  .item-icon-container {
    position: relative;
    left: 12px;
    top: 4px;
    padding: 0px;
    margin: 0px;
  }

  .item-icon {
    left: 12px;
    top: 4px;
    height: 96px;
    padding: 0px;
    margin: 0px;
  }

  .damage-icon {
    position: absolute;
    height: 17px;
    width: 17px;
    bottom: 6px;
    right: 30px;
    background-color: black;
    filter: brightness(2);
  }

  .item-light {
    position: absolute;
    display: block;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    bottom: 6px;
    right: 0px;
    line-height: 1em;
    background-color: black;
  }

  .item-details {
    position: absolute;
    color: white;
    left: 22%;
    top: 1%;
    height: 100%;
  }

  .item-name {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .item-type {
    font-size: 1.15rem;
  }

  .item-sockets-container {
    position: absolute;
    left: 10%;
    bottom: 15%;

  }

  .item-sockets {
    position: relative;
    padding-right: 0.25em;
  }

  .item-socket {
    bottom: 2px;
    height: 30px;
    width: 30px;
  }

  @media all and (max-width: 600px) {
    .item {
      height: 80px;
      width: 90%;
      padding-top: 2px;
      padding-bottom: 2px;
    }

    .item-group {
      width: 100%;
    }

    .item-icon-container {
      position: relative;
    }

    .item-icon {
      height: 80px;
    }

    .item-details {
      position: absolute;
      color: white;
      left: 35%;
      top: 2%;
      height: 100%;
    }

    .item-name {
      font-size: 1.10rem;
      font-weight: bold;
    }

    .item-type {
      font-size: 1.0rem;
    }

    .item-sockets-container {
      position: relative;
      left: 12%;
      top: 20%;
    }

    .item-sockets {
      position: relative;

    }

    .item-socket {
      position: relative;
      height: 15px;
      width: 15px;
    }
  }
</style>