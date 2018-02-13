<template>

    <v-form  v-model="valid" ref="form" >
      <v-layout row wrap>
      <v-flex xs4 style="padding-left:1%">
          <v-text-field
            label="Find"
            v-model="find"
            required></v-text-field>
      </v-flex>
        <v-flex xs4 style="padding-left:1%">
          <v-text-field
            label="Stars"
            v-model="stars"
            required></v-text-field>
        </v-flex>
          <v-flex xs4 style="text-align:center" >
            <v-btn @click="submit">
              search
            </v-btn>
        </v-flex>
      </v-layout>
    </v-form>

</template>



<script>
  import axios from 'axios'
  import  {EventBus}  from '@/event-bus.js';

  export default {
    name:'search',
    data: () => ({
      valid: true,
      find: '',
      stars:''

    }),

    methods: {
      submit:function () {
        var data={
          stars: this.stars,
          find:this.find
        };
        EventBus.$emit('searchValues', data);
        console.log(this.find,this.area);
      }
    }
  }
</script>
