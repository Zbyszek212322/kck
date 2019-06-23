<template>
  <v-container >
    <v-layout align-content-center justify-center row>
        <v-flex xs12 md6>
            <v-card tile flat>
                <v-card-text>
                    <div style="background-color: white; height: 664px;" >
                        </div>
                </v-card-text> 
            </v-card>
        </v-flex>
        <v-flex xs6 hidden-sm-and-down>
            <v-layout row wrap>
                <v-flex v-for="i in 6" :key="`6${i}`" sm6>
                    <v-card tile flat>
                        <v-card-text>
                            <div style="background-color: pink; height: 200px;"></div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<style>



</style>
    
    
