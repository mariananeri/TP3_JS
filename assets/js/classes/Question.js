class Question {
    constructor() {
      this.id;
      this.titre;
      this.bonneReponse;
      this.choixReponses;
      this.conteneurHTML; //l'endroit où sera affiché la question
      this.gabaritHTML; //Le HTML à clôner
    }
  
    injecterHTML() {}
    poserQuestion() {}
    verifierReponse() {}
    afficherErreur() {}
    afficherBonneReponse() {}
  }
  
  export default Question;
  