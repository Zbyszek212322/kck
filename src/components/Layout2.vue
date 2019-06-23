<template>
  <v-container fluid grid-list-md>
     <v-layout align-content-center justify-center row>
      <v-flex d-flex xs12 md6>
        <v-card color="white">
          <v-card-title primary class="title"></v-card-title>
          <v-card-text>{{  }}
              <div style="height: 664px;" ></div>
          </v-card-text>
        </v-card>
      </v-flex>
      
          <v-flex xs6 hidden-sm-and-down>
            <v-layout row wrap>
              <v-flex v-for="i in 6" :key="`6${i}`" sm6>
                <v-card
                  color="red lighten-2"

                >



                <v-card-title primary class="title"></v-card-title>
                  <v-card-text>{{  }}
                      <div style="height: 200px;"></div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>


  </v-container>
</template>

content_copy
Lorem