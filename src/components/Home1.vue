<template>
  <v-app
    id="inspire"
    dark
  >
    

   
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >


      <v-toolbar-title class="mr-5 align-center">

          <router-link to="/" tacg="button">
              <span class="title">Home</span>
          </router-link>

      </v-toolbar-title>

      <div>
          <v-btn><router-link to="/Home1" tag="button">Change view 2</router-link></v-btn>
        
      </div>

      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>

       <Layout/>

        

    </v-content>
  </v-app>
</template>

<script>

    import Layout from './../components/Layout'

    export default {
    data: () => ({
    }),
    props: {
      source: String
    },
        components: {
            Layout
        }
        
}
</script>
