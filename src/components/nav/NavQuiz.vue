<template>
  <nav>
    <router-link v-show="activeQuiz !== 'QuizUser'" v-bind:to="{ name: 'QuizUser' }">Environmental impact</router-link>
    <router-link v-show="activeQuiz !== 'QuizConception'" v-bind:to="{ name: 'QuizConception' }">"Green" design</router-link>
    <router-link v-show="activeQuiz !== 'QuizFront'" v-bind:to="{ name: 'QuizFront' }">Front-end development</router-link>
    <router-link v-show="activeQuiz !== 'QuizBack'" v-bind:to="{ name: 'QuizBack' }">Back-end development</router-link>
  </nav>

  <div v-show="activeQuiz !== ''" class="text-center mt-5">
    <router-link  v-bind:to="{ name: 'HomePage' }">Back to home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'NavQuiz',
    props: ['activeQuiz']
  }
</script>