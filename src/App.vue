<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <header-app />
  <router-view :key="$route.fullPath"></router-view>
  <footer-app />
</template>

<script>
  import Header from './components/statics/HeaderApp.vue'
  import Footer from './components/statics/FooterApp.vue'

  export default {
    name: 'App',
    components: {
      'header-app': Header,
      'footer-app': Footer,
    }
  }
</script>
