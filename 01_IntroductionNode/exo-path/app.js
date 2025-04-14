const path = require('path');

const cheminComplet = path.join('documents', 'rapport.txt');
console.log("chemin complet : ", cheminComplet);

const cheminAbsolu = path.resolve('rapport.txt');
console.log("chemin absolu : ", cheminAbsolu);

const extension = path.extname('/documents/rapport.txt');
console.log("extension", extension);

const repertoire = path.dirname('/documents/fichier.txt');
console.log("répertoire : ", repertoire);

const nomFichier = path.basename('/documents/rapport.txt');
console.log("nom fichier : ", nomFichier);

const detailsChemin = path.parse('/documents/rapport.txt');
console.log("détail chemin : ", detailsChemin);

const cheminNormalise = path.normalize('/documents//rapport.txt');
console.log("chemin normalisé : ", cheminNormalise);