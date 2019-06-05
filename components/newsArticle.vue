<template>
    <v-flex xs12 class="article">
      <v-card dark class="news-article-card">
      <v-img class="white--text article-background" :src="article.banner" contain>
        <v-container class="pa-0 image-text-overlay" style="background-color: rgba(0, 0, 0, 0.2);">
          <v-layout>
            <v-flex class="ml-2">
              <v-layout column class="ma-0">
                <span class="headline font-weight-medium" style="color: white;">{{ article.title }}</span>
                <span class="title font-weight-medium">{{ article.subtitle }}</span>
              </v-layout>
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
          <v-layout column class="text-xs-center">
            <span class="headline font-weight-medium">{{ article.title}}</span>
            <span class="subheading font-weight-medium">{{ article.subtitle }}</span>
          </v-layout>
        </v-card-title>
        <v-card-text v-html="article.content"></v-card-text>
        <v-card-actions>
          <v-btn flat small color="orange" block @click="showDetail = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-flex>
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

  .news-article-card {
    width: 400px;
  }

  .article-background {
    width: 400px;
  }

  .youtube-video {
    width: 375px;
    height: 210px;
  }

  @media all and (max-width: 400px) {

    .news-article-card {
      width: 100%;
    }

    .article-background {
      width: 100%;
    }

    .youtube-video {
      width: 375px;
      height: 210px;
    }
  }
</style>