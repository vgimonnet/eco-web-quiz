<template>
  <nav>
    <ul>
      <li>
        <router-link v-bind:to="{ name: 'QuizUser' }">QuizUser</router-link>
      </li>
      <li>
        <router-link v-bind:to="{ name: 'QuizBack' }">QuizBack</router-link>
      </li>
      <li>
        <router-link v-bind:to="{ name: 'QuizFront' }">QuizFront</router-link>
      </li>
      <li>
        <router-link v-bind:to="{ name: 'QuizInfra' }">QuizInfra</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>
