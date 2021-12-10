<template>
  <nav>
    <ul>
      <li>
        <router-link v-bind:to="{ name: 'QuizDev' }">QuizDev</router-link>
      </li>
      <li>
        <router-link v-bind:to="{ name: 'QuizUser' }">QuizUser</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>
