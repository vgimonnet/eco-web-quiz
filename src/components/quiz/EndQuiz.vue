<template>
  <div v-show="isEnded">
    <p class="text-center">
      Quiz is over ! Thanks for your participation !
    </p>
    <nav-quiz :activeQuiz="activeQuiz"/>
  </div>
</template>

<script>
  import NavQuiz from '../nav/NavQuiz.vue';

  export default {
    name: 'EndQuiz',
    props: ['isEnded', 'activeQuiz'],
    components: {
      'nav-quiz': NavQuiz
    }
  }
</script>