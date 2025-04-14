const express = require('express');
const app = express();
const port = 3000;

const bookRoutes = require('./Routes/bookRoutes');
app.use(express.json());
app.use('/', bookRoutes);

app.get('/bienvenue', (req, res) => {
    res.send(`
      <html>
        <head><title>Bienvenue</title></head>
        <body>
          <h1>Bienvenue !</h1>
        </body>
      </html>
    `);
});

app.get('/info', (req, res) => {
    res.json({
      nom: "Justine Loriot",
      age: 28
    });
});

app.get('/acces-interdit', (req, res) => {
    res.status(401).send("Accès interdit !");
});

app.get('/redirection-accueil', (req, res) => {
    res.redirect('/');
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Accueil</title></head>
      <body>
        <h1>Accueil</h1>
        <ul>
            <li><a href="/bienvenue">Page de bienvenue</a></li>
            <li><a href="/info">Infos JSON</a></li>
            <li><a href="/acces-interdit">Accès interdit</a></li>
            <li><a href="/redirection-accueil">Redirection vers l'accueil</a></li>
            <li><a href="/livres">Liste des livres</a></li>
            <li><a href="/livres/1">Détail du livre ID 1</a></li>
            <li><a href="/recherche-livre/auteur/Auteur%20un">Recherche par auteur : Auteur un</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.use((req, res) => {
    res.status(404).send("Page non trouvée.");
});

app.listen(port, () => {
  console.log(`Serveur Express2000 en écoute sur http://localhost:${port}`);
});
