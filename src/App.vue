<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- component vv -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>


