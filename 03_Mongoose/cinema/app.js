const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/cinemaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur MongoDB :', err));

app.use('/movies', movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
