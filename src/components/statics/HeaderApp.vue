<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link v-bind:to="{ name: 'HomePage' }">HomePage</router-link>
        </li>
        <li>
          <router-link v-bind:to="{ name: 'QuizDev' }">QuizDev</router-link>
        </li>
        <li>
          <router-link v-bind:to="{ name: 'QuizUser' }">QuizUser</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderApp'
  }
</script>