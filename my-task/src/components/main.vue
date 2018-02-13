<template>
<v-layout row wrap>
  <v-flex v-show="show" style="padding-top:1%" v-for="item in list" row xs12>
    <v-card>
      <v-layout row wrap>
       <v-flex xs10>
          <v-card-title primary-title>
            <div >
              <div class="headline">{{item.name}}</div>
              <div class="grey--text">{{item.stars}} stars</div>
              <div class="grey--text">Postal code :{{item.postal_code}}</div>
              <div class="grey--text">State {{item.state}}</div>
            </div>
         </v-card-title>
         <div style="padding:1%">
           <span >Total reviews {{item.review_count}}</span>
         </div>
       </v-flex>
       <v-flex xs2>
          <v-card-title primary-title>
            <div>
              <p>{{item.address}}</p>

            </div>
         </v-card-title>
       </v-flex>
       </v-layout>
    </v-card>
  </v-flex >
  <v-flex v-show="!show" style="padding-top:1%" row  xs12>
      <v-card>
        <p>no data to show</p>
      </v-card>
  </v-flex>
</v-layout>
</template>


<script type="text/javascript">
import axios from 'axios'
import  {EventBus}  from '@/event-bus.js';

export default {
  name: 'main',
  data(){
    return{
      list:[],
      show:true
    }
  },
  created() {
    axios.get(`http://localhost:8081/getData`)
    .then(response => {

      this.list = response.data;
      console.log(this.list);
    })
    .catch(e => {
      console.log(e);
    })
  },
  mounted(){
    var that = this;
    EventBus.$on('searchValues', function(data){
      console.log(data);
      axios.get(`http://localhost:8081/filter/`+data.find+'/'+data.stars)
      .then(response => {
        console.log(response);
        if (response.data.length!=0) {
          that.show = true;
          that.list = response.data
        }else {
          that.list =[];
            that.show = false;
        }
      })
      .catch(e => {
        console.log(e);
      })
    });
  }
}
</script>
