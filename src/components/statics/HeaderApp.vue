<template>
  <header>
    <router-link v-bind:to="{ name: 'HomePage' }">
      Eco-Web-Quiz
    </router-link>
  </header>
</template>

<script>
  export default {
    name: 'HeaderApp'
  }
</script>
