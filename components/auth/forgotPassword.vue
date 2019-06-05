<template>
  <v-container class="container-fluid">
    <v-layout justify-center>
      <v-flex xs12 sm8 md4 lg4 xl4>
        <v-card light raised class="elevation-12">
          <v-form>
            <v-text-field label="Enter Email Address" id="emailAddress" v-model="emailAddress" type="email" prepend-icon="email" persistent-hint hint="* Required"></v-text-field>
            <v-layout justify-center>
              <v-btn label="Login" @click="submit">Submit</v-btn>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    name: 'forgotPassword.vue',
    data () {
      return {
        emailAddress: ''
      }
    },
    computed: {
    },
    methods: {
      submit () {
        console.log('submit')
      }
    }
  }
</script>

<style scoped>

</style>
/* TODO add vuelidate for verifying input of email address before enabling Submit button */
