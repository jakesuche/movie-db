<template>
  <div id="app">
    <Header v-bind:title="title" />
    <transition name="fade">
      <router-view />
    </transition>
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

 header{
        background-color: #111;
        padding:20px;
        color:white
    }
    h1{
        margin:0;
    }
    .fade-enter-active, .fade-leave-active{
        transition: all 0.3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
        transform: translateX(100%)
    }
</style>
