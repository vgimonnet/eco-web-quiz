<template>
  <main>
    <h1>Quiz - Eco web development</h1>
    <question-card 
      v-for="question in questions"
      :key="question.id" 
      :question="question" 
      :activeQuestion="activeQuestion"
      @changeQuestion="changeQuestion()"
    />
    <p v-if="isEnded">
      Quiz is over ! Thanks for your participation !
    </p>
  </main>  
</template>

<script>
  import questions from '../datas/quiz-conception.json'
  import QuestionCard from './quiz/QuestionCard.vue'

  export default {
    name: "QuizConceptionPage",
    components: {
      'question-card': QuestionCard
    },
    data() {
      return {
        questions: questions,
        activeQuestion: 1,
        isEnded: false
      }
    },
    methods: {
      changeQuestion() {
        if (this.activeQuestion == 2) {
          this.isEnded = true;
        }
        this.activeQuestion++;        
      }
    }
  }
</script>
