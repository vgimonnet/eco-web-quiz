<template>
  <main>
    <h1 class="text-center">
      <span>
        Eco-Web-Quiz
      </span>
    </h1>
    <p>
      Welcome ! 
      Currently studying a Masters in Web Development, 
      I have to carry out a project in English on the theme I want. 
      I chose to deal with the theme of web eco-design. 
      Being a developer and concerned about the impact of my work on the environment, 
      I have done research on the subject, in order to offer you, through various specific quizzes, essential points and tips for web eco-design.
    </p>
    <h2>
      <span>
        What is eco-design ?
      </span>
    </h2>
    <figure>
      <blockquote>
        Methodical approach that takes into consideration the environmental aspects of the design and development process with the aim of reducing negative environmental impacts throughout the life cycle of a product.
      </blockquote>
      <figcaption>
        <cite>
          <a href="https://www.iso.org/standard/72644.html">ISO 14006:2020 standard</a>
        </cite>
      </figcaption>
    </figure>
    <h2>
      <span>
        Quizzes
      </span>
    </h2>
    <p>
      The 4 quizzes each deal with a different theme. A global general public quiz on environmental impact of digital, a quiz on design, a quiz on frontend development and a last one on backend development.
    </p>
    <p>
      Each quiz has 5 questions each time with an explanation of the answer. The answer can be accompanied by tips for their achievement.
    </p>
    <nav-quiz :activeQuiz="activeQuiz" />
    <p class="mt-3">
      If you wish to communicate with me to inform me of an error in the content or if you have a question, contact me by <a href="mailto:valentin.gimonnet18@gmail.com">email</a>.
    </p>

    <!-- <div id="square1"></div>
    <div id="round1"></div>
    <div id="square2"></div>
    <div id="round2"></div> -->
    <h2>
      <span>
        Sources
      </span>
    </h2>
    <ul>
      <li><a href="https://www.insee.fr/fr/statistiques/4238589?sommaire=4238635">INSEE - Statistics</a></li>
      <li><a href="https://www.youtube.com/watch?v=ZqeA_psKn2E&ab_channel=TEDxTalks">Tedx - Chrisitaan Maats</a></li>
      <li><a href="https://ecoresponsable.numerique.gouv.fr/publications/impact-bonnes-pratiques/">French government - Best practices</a></li>
      <li><a href="https://www.greenit.fr/2020/06/23/quels-sont-les-impacts-environnementaux-du-numerique-en-france/">GreenIt - Environmental impact</a></li>
      <li><a href="http://www.libella.fr/data/extrait/9782283032152.pdf">Frédéric Bordage / Isabelle Autissier - Digital sobriety (Book)</a></li>
      <li><a href="https://lebondigital.com/avantages-eco-conception-web/">Alizée Colin for LeBonDigital - Web ecodesign</a></li>
      <li>Frédéric Bordage - Web ecodesign 115 best practices (Book)</li>
      <li><a href="https://www.totalenergies.fr/particuliers/parlons-energie/dossiers-energie/comprendre-le-marche-de-l-energie/la-consommation-energetique-de-l-internet-mondial">Adeline M. for Total Energies - Electricity consumption</a></li>
    </ul>
  </main>
</template>

<script>
  import NavQuiz from './nav/NavQuiz.vue';

  export default {
    name: 'HomePage',
    data() {
      return {
        activeQuiz: ''
      }
    },
    components: {
      'nav-quiz': NavQuiz
    }
  }
</script>
