<template>
  <v-container class="container-fluid">
    <v-layout justify-center>
      <v-flex xs12 sm8 md4 lg4 xl4>
        <v-card light raised class="elevation-12">
          <v-form>
            <v-text-field label="Enter New Password" id="newPassword" type="password" v-model="newPassword" prepend-icon="lock" persistent-hint hint="* Required"></v-text-field>
            <v-layout justify-center>
              <v-btn v-bind:disabled="passwordLength" label="Login" @click="setNewPassword">Submit</v-btn>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'newPassword.vue',
    data () {
      return {
        minPasswordLength: 8,
        newPassword: ''
      }
    },
    computed: {
      passwordLength () {
        console.log(this.newPassword.length)

        if (this.newPassword.length > this.minPasswordLength) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      setNewPassword () {

        console.log('submit')
      }
    }
  }
</script>

<style scoped>

</style>
