<template>
  <v-container class="ma-0 pa-2">
    <v-card dark width="600px" class="news-article-card">
      <v-img class="white--text" width="600px" :src="article.banner">
        <v-container class="pa-2" style="background-color: rgba(0, 0, 0, 0.2);">
          <v-layout>
            <v-flex>
              <div >
                <span class="display-1 font-weight-black" style="color: white;">{{ article.title }}</span><br/>
                <span class="headline font-weight-bold">{{ article.subtitle }}</span>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <!-- <v-card-title primary-title class="pa-2">
        <div>
          <span class="headline font-weight-bold">{{ article.title}}</span><br/>
          <span class="subheading font-weight-bold">{{ article.subtitle }}</span>
        </div>
      </v-card-title>
      <v-img width="600px" :src="article.banner"></v-img> -->
      <v-card-actions>
        <v-btn flat small color="orange" block @click="showDetail = true">View Article</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="showDetail" width="70%">
      <v-card dark tile>
        <v-card-title primary-title class="pa-2">
          <div>
            <span class="headline font-weight-bold">{{ article.title}}</span><br/>
            <span class="subheading font-weight-bold">{{ article.subtitle }}</span>
          </div>
        </v-card-title>
        <v-card-text v-html="article.content"></v-card-text>
        <v-card-actions>
          <v-btn flat small color="orange" block @click="showDetail = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    props: ['article'],
    data () {
      return {
        showDetail: false
      }
    }
  }
</script>

<style scoped>
  .youtube-video {
    width: 375px;
    height: 210px;
  }

  @media all and (max-width: 400px) {
    .youtube-video {
      width: 375px;
      height: 210px;
    }
  }
</style>