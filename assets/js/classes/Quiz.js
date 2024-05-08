import { questions } from "../donnees/questionsQuiz.js";
import Pointage from "./Pointage.js";
import Question from "./Question.js";

class Quiz {
  constructor() {
    this.questions;
    this.nbQuestions;

    this.indexQuestionActuelle; //L'index de la question
    this.questionActuelle; //Question

    this.conteneurPointage = document.querySelector(".pointage");
    this.pointage = new Pointage(0, this.conteneurPointage);

    this.panneauDebutHTML;
    this.boutonDemarrageQuiz;
    this.panneauFinHTML;
    this.panneauQuestionHTML;
  }
  demarrerQuiz() {}
  prochaineQuestion() {}
  terminerQuiz() {}
}

export default Quiz;
