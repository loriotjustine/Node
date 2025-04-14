const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question : "Quelle est la capitale de la France ?",
    reponse : "Paris"
  },
  {
    question : "Quel est le plus grand océan de la planète ?",
    reponse : "Pacifique"
  },
  {
    question : "Combien de continents y a-t-il sur Terre ?",
    reponse : "7"
  }
];

function askQuestion(index, score) {
    if (index < questions.length) {
      rl.question(questions[index].question + " ", (userAnswer) => {
        if (userAnswer === questions[index].reponse) {
          console.log("Bonne réponse !");
          score++;
        } else {
          console.log("Ce n'est pas la bonne réponse, mais tu peux réessayer !");
        }
  
        askQuestion(index + 1, score);
      });
    } else {
      console.log(`Félicitations ! Vous avez répondu correctement à ${score} / ${questions.length} devinettes.`);
      rl.close();
    }
  }

console.log("Bienvenue au jeu de devinettes !");
console.log("Répondez aux questions suivantes :");

askQuestion(0, 0);
