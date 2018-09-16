<template>
  <v-container class="ma-0 pa-0 account-container" fluid>
    <!-- <v-progress-circular class="account-loader-progress" indeterminate color="orange" :size="50" :width="5" v-if="isLoading"></v-progress-circular> -->
    <!-- <v-card class="elevation-24" raised dark> -->
    <v-layout class="ma-0" row wrap justify-center justify-space-around>
      <v-card flat class="ma-0 px-2 py-2" v-for="(character, i) in characters" :key="character.character_id" :style="selectedCharacterId === character.character_id ? 'border: solid orange;' : 'border: none;'">
        <div class="character" :id="character.character_id" @click="displayCharacter(character.character_id)">
          <div class="character-background">
            <img class='character-background-image' :src='`${character.background}`'></img>
            <img class='character-emblem-image' :src='`${character.emblem}`'></img>
          </div>
          <div class='character-details'>
            <div class='character-class'>{{ character.class_name }}</div>
            <div class='race-gender'>{{ character.race_name }} {{ character.gender_name }}</div>
          </div>
          <div class='character-levels'>
            <div class='level'>{{ character.level }}</div>
            <div class='light'>{{ character.light }}</div>
          </div>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        selectedCharacterId: null,
        selectedCharacter: null
      }
    },
    props: ['characters'],
    methods: {
      displayCharacter (characterId) {
        this.selectedCharacterId = characterId
        let selectedCharacter = {}
        this.characters.forEach(function readCharacters (character) {
          if (character.character_id === characterId) {
            selectedCharacter = character
          }
        })
        this.$emit('characterSelected', selectedCharacter)
      }
    },
    mounted () {
      this.selectedCharacterId = this.$store.state.characters[0].character_id
      this.$emit('isLoaded', true)
    }
  }
</script>

<style scoped>
  .character {
    height: 96px;
    width: 474px;
    position: relative;
  }

  .character-background {
    position: absolute;
  }

  .character-emblem {
    position: absolute;
  }

  .character-emblem-image {
    position: absolute;
    left: 0;
    top: 0;
  }
  .character-details {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 20%;
    text-align: left;
  }

  .character-class {
    position: relative;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    top: 5%;
  }

  .race-gender {
    position: relative;
    color: white;
    font-size: 2rem;
    bottom: 5%;
  }

  .character-levels {
    position: absolute;
    height: 100%;
    width: 25%;
    top: 0;
    left: 75%;
    text-align: right;
  }

  .level {
    position: relative;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    top: 5%;
    padding-right: 10px;
  }

  .light {
    position: relative;
    color: white;
    font-size: 2rem;
    bottom: 5%;
    padding-right: 10px;
  }

  @media all and (max-width: 400px) {
    .character {
      height: 65px;
      width: 100%;
      padding-top: 2px;
      padding-bottom: 2px;
      position: relative;
    }

    .character-background {
      position: relative;
    }

    .character-background-image {
      height: 65px;
      position: relative;
    }

    .character-emblem-image {
      position: absolute;
      height: 65px;
      top: 0;
      left: 0;
    }

    .character-details {
      position: absolute;
      height: 100%;
      width: 50%;
      top: 0;
      left: 20%;
      text-align: left;
    }

    .character-class {
      position: relative;
      color: white;
      font-size: 1.25rem;
      font-weight: bold;
      top: 5%;
    }

    .race-gender {
      position: relative;
      color: white;
      font-size: 1.125rem;
      bottom: 5%;
    }

    .character-levels {
      position: absolute;
      height: 100%;
      width: 25%;
      top: 0;
      left: 75%;
      text-align: right;
    }

    .level {
      font-size: 1.25rem;
      top: 5%;
    }

    .light {
      font-size: 1.125rem;
      bottom: 5%;
    }
  }
</style>