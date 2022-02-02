<template>
  <main>
    <h1>Quiz - Eco back-end development</h1>
    <question-card 
      v-for="question in questions"
      :key="question.id" 
      :question="question" 
      :activeQuestion="activeQuestion"
      @changeQuestion="changeQuestion()"
    />
    <end-quiz :isEnded="isEnded" :activeQuiz="activeQuiz" />
  </main>  
</template>

<script>
  import questions from '../datas/quiz-back.json';
  import QuestionCard from './quiz/QuestionCard.vue';
  import EndQuiz from './quiz/EndQuiz.vue';

  export default {
    name: "QuizBackPage",
    components: {
      'question-card': QuestionCard,
      'end-quiz': EndQuiz
    },
    data() {
      return {
        questions: questions,
        activeQuestion: 1,
        isEnded: false,
        activeQuiz: 'QuizBack'
      }
    },
    methods: {
      changeQuestion() {
        if (this.activeQuestion == 5) {
          this.isEnded = true;
        }
        this.activeQuestion++;        
      }
    }
  }
</script>
