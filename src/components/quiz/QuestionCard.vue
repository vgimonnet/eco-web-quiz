<template>
  <div v-if="question.id == activeQuestion">
    <p v-html="question.text"></p>
    <div v-if="isAnswered">
      <p v-html="question.explanation"></p>
      <div v-if="question.tips">
        <strong>What can I do ?</strong>
        <p v-html="question.tips"></p>
      </div>
      <div v-if="question.refs">
        <strong>Refs</strong>
        <p v-html="question.refs"></p>
      </div>
      <div class="flex">
        <button @click="$emit('changeQuestion')" class="next">Suivant</button>
      </div>
    </div>
    <div v-else class="proposals">
      <button 
        v-for="(proposal, index) in question.proposals" 
        :key="index" 
        @click="answerQuestion(index)"
        v-html="proposal"
      >
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
        this.isAnswered = true;
        console.log(this.question.customAnswer)
        if (proposal == this.question.answer) {
          window.alert('Good answer !');
        } else {
          window.alert(`Wrong answer ! The correct answer was "${ this.question.customAnswer ?? this.question.proposals[this.question.answer] }"`);
        }
      }
    }
  }
</script>