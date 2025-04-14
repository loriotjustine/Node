const fs = require('fs');

fs.mkdir("nouveau_repertoire", (err) => {
  if (err) throw err;
  console.log("Répertoire créé avec succès!");

  fs.writeFile("nouveau_repertoire/nouveau_fichier.txt", "Contenu du fichier à écrire.", 'utf8', (err) => {
    if (err) throw err;
    console.log("Le fichier a été enregistré");

    fs.readFile("nouveau_repertoire/nouveau_fichier.txt", 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);

      fs.readdir("nouveau_repertoire", (err, files) => {
        if (err) throw err;
        console.log("Contenu du répertoire: ", files);

        fs.unlink("nouveau_repertoire/nouveau_fichier.txt", (err) => {
          if (err) throw err;
          console.log("Fichier supprimé avec succès!");

          fs.rmdir("nouveau_repertoire", (err) => {
            if (err) throw err;
            console.log("Répertoire supprimé avec succès!");
          });
        });
      });
    });
  });
});
