<template>
  <v-container fluid grid-list-md>

<v-btn color="black" large="true" block="true" @click="changeNumber()">Get random value</v-btn>

    <v-layout align-content-center justify-center row>
      <v-flex d-flex xs12 md6>
        <v-card color="white">
          <v-card-title primary class="title">
              <div style="color: black;">{{results[0]}}</div>
          </v-card-title>
          <v-card-text>
            {{  }}
            <div style="height: max;"></div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs12 md6>
        <v-layout row wrap>

          <v-flex sm6>
            <v-card color="red lighten-4">
              <v-card-title primary class="title">
                  <div style="color: black;">{{results[1]}}</div>
              </v-card-title>
              <v-card-text>
                {{  }}
                <div style="height: 150px;"></div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex sm6>
            <v-card color="white">
              <v-card-title primary class="title">
                  <div style="color: black;">{{results[2]}}</div>
              </v-card-title>
              <v-card-text>
                {{  }}
                <div style="height: 150px;"></div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex sm6>
            <v-card color="white">
              <v-card-title primary class="title">
                  <div style="color: black;">{{results[3]}}</div>
              </v-card-title>
              <v-card-text>
                {{  }}
                <div style="height: 150px;"></div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex sm6>
            <v-card color="red lighten-4">
              <v-card-title primary class="title">
                  <div style="color: black;">{{results[4]}}</div>
              </v-card-title>
              <v-card-text>
                {{  }}
                <div style="height: 150px;"></div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex sm6>
            <v-card color="red lighten-4">
              <v-card-title primary class="title">
                  <div style="color: black;">{{results[5]}}</div>
              </v-card-title>
              <v-card-text>
                {{  }}
                <div style="height: 150px;"></div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex sm6>
            <v-card color="white">
              <v-card-title primary class="title">
                  <div style="color: black;">{{results[6]}}</div>
              </v-card-title>
              <v-card-text>
                {{  }}
                <div style="height: 150px;"></div>
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>



  </v-container>
</template>

<script>
    export default {
        data() {
            return {
                silnia: 1,
                results: [],
                randnum: null
            }
        },
        methods: {
            fsilnia: function(n) {
                if ((n == 0) || (n == 1)) {
                    this.results.push(1);
                    return 1;
                } else {
                    var result = (n * this.fsilnia(n-1));
                    this.results.push(result);
                    return result;
                }
            },
            changeNumber: function() {
                this.randnum = Math.floor(Math.random() * 1000)
            }
        },
        mounted() {
            this.silnia = this.fsilnia(7)
        },
        watch: {
            silnia: function(){
                console.log(this.silnia)
            },
            randnum: function(newValue, oldValue) {
                console.log("Old value: " + oldValue, ", current value: " + newValue)
            }
        }
    }
    
</script>
