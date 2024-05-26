import { questions } from "../donnees/questionsQuiz.js";
import Pointage from "./Pointage.js";
import Question from "./Question.js";

class Quiz {
  constructor() {
    this.nbMaxQuestions = 5;
    this.questions = questions;

    this.indexQuestionActuelle = 0; // L'index de la question
    this.questionActuelle; // L'instance de la question actuelle

    this.conteneurPointage = document.querySelector(".pointage");
    console.log(this.conteneurPointage );
    this.pointage = new Pointage(0, this.conteneurPointage);
    this.pointage.afficherPoints();

    //Sélectionner les éléments HTML nécessaires
    this.panneauDebutHTML = document.querySelector(".quiz-panneau-debut");
    this.boutonDemarrageQuiz = this.panneauDebutHTML.querySelector(".bouton");
    this.panneauFinHTML = document.querySelector(".quiz-panneau-fin");
    this.panneauQuestionHTML = document.querySelector(".quiz-conteneur");
    this.messageConteneur;

    //Ajouter les écouteurs d'événements ici
    this.boutonDemarrageQuiz.addEventListener(
      "click",
      this.prochaineQuestion.bind(this)
    );
      this.panneauDebutHTML.addEventListener(
        "animationend", function(){
          this.boutonDemarrageQuiz.classList.remove("invisible")
        }
        .bind(this)
      )
    this.demarrerQuiz();
  }

  // ====================
  // AFFICHAGE ET NAVIGATION

  cacherPanneaux() {
    // Utiliser les classes CSS pour cacher les panneaux
    this.panneauDebutHTML.classList.add("invisible");
    this.panneauFinHTML.classList.add("invisible");
    this.panneauQuestionHTML.classList.add("invisible");
  }

  afficherPanneau(panneauHTML) {
    // Utiliser les classes CSS pour afficher le panneau
    panneauHTML.classList.remove("invisible");
  }

  // ====================
  // GESTION DES QUESTIONS ET DU QUIZ
  demarrerQuiz() {
    // Afficher le panneau de début
    this.cacherPanneaux();
    this.afficherPanneau(this.panneauDebutHTML);
  }

  prochaineQuestion() {
   if(this.indexQuestionActuelle<this.nbMaxQuestions){
     // Afficher le panneau de question
     this.cacherPanneaux();
     this.afficherPanneau(this.panneauQuestionHTML);
     // Vérifier si c'est la dernière question
     this.pointage.elementHTML.classList.remove("invisible")
     // // Si oui, terminer le quiz
 
     // Sinon
     // // Récupérer la question suivante
     let infosQuestion = this.questions[this.indexQuestionActuelle];
 
     // // Instancier une nouvelle question en passant la question actuelle au constructeur
     let conteneur = document.querySelector(".quiz-conteneur");
     let gabarit = document.querySelector("template#question");
     let instanceQuiz = this;
 
     //Vide le HTML du conteneur
     conteneur.innerHTML = "";
 
     this.questionActuelle = new Question(
       infosQuestion.question,
       infosQuestion.bonneReponse,
       infosQuestion.reponses,
       conteneur,
       gabarit,
       instanceQuiz
     );
     // // Avancer l'index de la question actuelle
     this.indexQuestionActuelle++;
   }else{
    this.terminerQuiz();
   }
  }

  terminerQuiz() {
    // Afficher le panneau de fin
      this.cacherPanneaux();
      this.afficherPanneau(this.panneauFinHTML);
      this.panneauFinHTML.querySelector(".pointage").textContent=this.pointage.points
    }
    // Calculer le score final
    // Si plus de 50%, afficher un message de félicitations
    // Sinon, afficher un message d'encouragement
    //
  
  }

  

export default Quiz;
