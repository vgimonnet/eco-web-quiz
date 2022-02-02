<template>
  <main>
    <h1>Quiz - The environmental impact of digital</h1>
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
  import questions from '../datas/quiz-user.json';
  import QuestionCard from './quiz/QuestionCard.vue';
  import EndQuiz from './quiz/EndQuiz.vue';

  export default {
    name: "QuizUserPage",
    components: {
      'question-card': QuestionCard,
      'end-quiz': EndQuiz
    },
    data() {
      return {
        questions: questions,
        activeQuestion: 1,
        isEnded: false,
        activeQuiz: 'QuizUser'
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
