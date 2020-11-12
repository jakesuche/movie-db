<template>
  <div id="app">
    <Header v-bind:title="title" />
    <router-view />
  </div>
</template>

<script>

import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
    
      title: " Vue Movie Db",
      isTrue:true,
    
     
     
    };
  },
  components: {
  
    Header,
  
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white
  
}
</style>
