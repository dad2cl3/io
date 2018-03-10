<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-radio-group label="Are you 18+?" v-model="ageCheck" row>
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No" value="no"></v-radio>
        </v-radio-group>

        <v-checkbox v-model="ironCode">
          <span slot="label">Have you read the <nuxt-link to='/iron-code'>Iron Code</nuxt-link>?</span>
        </v-checkbox>

        <!--  <p>Please provide the URL to your <a href="https://www.bungie.net" target="new">bungie.net</a> profile:</p> -->
        <v-text-field label="Enter your gamertag" prepend-icon="search" v-model="profileSearch" @input="searchBungieProfiles" hint="* Required" persistent-hint>

        </v-text-field>
        <v-select label="Choose your profile" :items="profiles" item-text="profileName" v-model="profile" v-if="profiles.length > 0" prepend-icon="person" required></v-select>

        <v-select chips deletable-chips multiple prepend-icon="games" label="Choose your platform(s)" :items="platformOptions" v-model="platforms" hint="* Required" persistent-hint required></v-select>
        <v-radio-group label="Were you referred to us by an existing Iron Orange member?" row v-model="referred">
          <v-radio label="Yes" value="yes"></v-radio>
          <v-radio label="No" value="no"></v-radio>
        </v-radio-group>

        <v-text-field label="How did you hear about us?" prepend-icon="comment" v-if="referred === 'no'" v-model="heardAboutUs" hint="* Required" persistent-hint></v-text-field>
        <v-text-field label="By Whom (Enter gamertag)?" v-model="referralSearch" prepend-icon="search" v-if="referred === 'yes'" @input="searchIOProfiles" hint="* Required" persistent-hint></v-text-field>
        <v-select v-model="referredBy" :items="referralOptions" v-if="referralSearch && referred === 'yes'" prepend-icon="person"></v-select>

        <v-text-field label="Name" v-model="name" hint="* Required" prepend-icon="person" persistent-hint required></v-text-field>

        <v-text-field label="Email Address" v-model="email" hint="* Required for Discord setup" prepend-icon="email" persistent-hint required></v-text-field>

        <v-text-field label="Anything you would like to add?" prepend-icon="comment" multi-line v-model="additionalInfo"></v-text-field>
        <v-btn block raised v-bind:disabled="isInvalid" @click="submit">Submit Iron Application</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  import axios from 'axios'
  import { validationMixin } from 'vuelidate'
  import { required, requiredIf, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    data () {
      return {
        ageCheck: false,
        ironCode: false,
        referred: false,
        referral: null,
        referralSearch: null,
        profileSearch: null,
        referralOptions: [],
        referredBy: null,
        heardAboutUs: null,
        profile: null,
        profiles: [],
        name: null,
        email: null,
        additionalInfo: null,
        platformOptions: ['PlayStation', 'Xbox', 'PC'],
        platforms: []
      }
    },
    validations: {
      ageCheck: {
        required
      },
      ironCode: {
        required
      },
      name: {
        required
      },
      email: {
        required, email
      },
      profile: {
        required
      },
      platforms: {
        required
      },
      referredBy: {
        required: requiredIf('isReferredByOptional')
      },
      heardAboutUs: {
        required: requiredIf('isHeardAboutUsOptional')
      },
      validationGroup: ['ageCheck', 'ironCode', 'name', 'email', 'profile', 'platforms']
    },
    computed: {
      isReferredByOptional () {
        if (this.referred === 'yes') {
          return false
        } else {
          return true
        }
      },
      isHeardAboutUsOptional () {
        if (this.referred === 'no') {
          return false
        } else {
          return true
        }
      },
      isInvalid () {
        if (this.$v.validationGroup.$invalid) {
          return true
        } else if (!this.isReferredByOptional && this.referredBy != null) {
          return false
        } else if (!this.isHeardAboutUsOptional && this.heardAboutUs.length > 0) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      searchBungieProfiles () {
        let params = {
          searchString: this.profileSearch
        }

        let config = {
          params
        }

        axios.get('https://io.dad2cl3.net/bungie/searchusers', config)
          .then(response => {
            let profiles = response.data

            if (profiles.length > 0) {
              let newProfiles = []
              profiles.forEach(function readProfiles (profile) {
                let newProfile = {
                  profileName: profile.displayName,
                  profileUrl: `https://www.bungie.net/${profile.locale}/Profile/254/${profile.membershipId}`
                }
                newProfiles.push(newProfile)
              })
              this.profiles = newProfiles
            }
          })
      },
      searchIOProfiles () {
        let params = {
          searchString: this.referralSearch
        }

        let referralOptions = []
        axios.get('https://io.dad2cl3.net/profiles/search', {params})
          .then(response => {
            let options = response.data.profiles
            options.forEach(function readOptions (option) {
              referralOptions.push(option.bungie_name)
            })
            this.referralOptions = referralOptions
          })
      },
      submit () {
        if (!this.isInvalid) {
          alert('form completed')
          let responses = {
            responses: {
              age_check: this.ageCheck,
              iron_code: this.ironCode,
              profile_url: this.profile.profileUrl,
              referred: this.referred,
              referred_by: this.referredBy,
              heard_about_us: this.heardAboutUs,
              applicant_name: this.name,
              applicant_email: this.email,
              additional_info: this.additionalInfo
            }
          }

          console.log(responses)
          axios.post('https://io.dad2cl3.net/discord/applications/send', responses)
            .then(response => {
              console.log(response)
            })
        }
      }
    }
  }
</script>
