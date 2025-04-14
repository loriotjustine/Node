const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const livresPath = path.join(__dirname, '../livres.json');

// Route 1 : Liste des livres
router.get('/livres', (req, res) => {
  fs.readFile(livresPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send("Erreur de lecture du fichier.");
    res.json(JSON.parse(data));
  });
});

// Route 2 : Détails d’un livre par ID
router.get('/livres/:id', (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile(livresPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send("Erreur de lecture du fichier.");
    const livres = JSON.parse(data);
    const livre = livres.find(l => l.id === id);
    if (!livre) return res.status(404).send("Livre non trouvé.");
    res.json(livre);
  });
});

// Route 3 : Ajout d’un nouveau livre (simulation)
router.post('/ajout-livre', (req, res) => {
  res.send("Livre ajouté (simulation).");
});

// Route 4 : Recherche par auteur
router.get('/recherche-livre/auteur/:auteur', (req, res) => {
  const auteur = req.params.auteur.toLowerCase();
  fs.readFile(livresPath, 'utf8', (err, data) => {
    if (err) return res.status(500).send("Erreur de lecture du fichier.");
    const livres = JSON.parse(data);
    const resultats = livres.filter(l => l.auteur.toLowerCase() === auteur);
    res.json(resultats);
  });
});

module.exports = router;
