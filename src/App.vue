<template>
            <Home/>
</template>
<style>

      ::-webkit-scrollbar-track
      {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: #F5F5F5;
      }

      ::-webkit-scrollbar
      {
            width: 12px;
            background-color: #F5F5F5;
      }

      ::-webkit-scrollbar-thumb
      {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: rgb(100, 110, 112);
      }
</style>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
