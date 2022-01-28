<template>
  <div v-if="question.id == activeQuestion">
    <h2>{{ question.text }}</h2>
    <div v-if="isAnswered">
      <p>{{ question.explanation }}</p>
      <button @click="$emit('changeQuestion')">Suivant</button>
    </div>
    <div v-else>
      <button 
        v-for="(proposal, index) in question.proposals" 
        :key="index" 
        @click="answerQuestion(index)" 
      >
        {{ proposal }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuestionCard',
    props: ['question', 'activeQuestion'],
    data() {
      return {
        isAnswered: false
      }
    },
    methods: {
      answerQuestion(proposal) {
        this.isAnswered = true
        if (proposal == this.question.answer) {
          window.alert('Gaddam you did it !')
        } else {
          window.alert(`You suck ! Good answer was ${ this.question.answer }`)
        }
      }
    }
  }
</script>