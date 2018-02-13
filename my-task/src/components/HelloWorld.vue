<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app row  >
      <v-toolbar-title class="text-xs-center" style="width:100%">Yelp</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid  style="padding:.5%">
        <v-layout  row wrap>
         <v-flex >
          <v-card style="padding:1.5%;">
            <search-tab></search-tab>
         </v-card>
         </v-flex>
         <v-flex >
           <main-area></main-area>
        </v-flex>
       </v-layout>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text"> by Saipavan Narasaraj</span>
    </v-footer>
  </v-app>
</template>

<script>

import axios from 'axios'
import main from '@/components/main'
import search from '@/components/search'

  export default {
    name: 'HelloWorld',
    components:{
      'search-tab':search,
      'main-area': main
    },
    data: () => ({
      drawer: null,
      items:['main','login','sample3']
    }),
    methods:{
      sidenav:function(data){
        this.$router.push(data)
      }
    },
  created() {

  }
}
</script>
