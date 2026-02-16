import { Playlist } from "./models/Playlist.js";
import { StyleMusical } from "./models/Types.js";
import { rechercherTitres } from "./services/MusicAPI.js";

async function main() {
    console.log("=== DÉBUT DU TEST GLOBAL DU MOTEUR MUSICAL ===\n");

    // TEST 1 : Initialisation de la Playlist 
    const maPlaylist = new Playlist("Test Master 2026");
    console.log(`--- Test 1 (Init) : Playlist "${maPlaylist.nom}" créée.`);

    try {
        // TEST 2 : Recherche API (Succès) 
        console.log("--- Test 2 (API) : Lancement recherche 'Samer'...");
        const resultats = await rechercherTitres("Samer");
        console.log(`✅ ${resultats.length} titres trouvés.`);

        // TEST 3 : Ajout à la Playlist 
        resultats.forEach(c => maPlaylist.ajouter(c));
        console.log("--- Test 3 (Ajout) : Titres ajoutés à la playlist.");
        console.table(maPlaylist.getTitres());

        // TEST 4 : Calcul de la durée totale 
        const dureeTotale = maPlaylist.obtenirDureeTotale();
        console.log(`--- Test 4 (Durée) : Durée totale calculée = ${dureeTotale}s`);

        // TEST 5 : Retirer un titre 
        console.log("--- Test 5 (Retrait) : Suppression du titre à l'index 1...");
        maPlaylist.retirer(1);
        console.table(maPlaylist.getTitres());

        // TEST 6 : JukeBox 
        console.log("--- Test 6 (JukeBox) : Lecture aléatoire...");
        maPlaylist.jouerAleatoire();

        // TEST 7 : Filtre par style 
        console.log("--- Test 7 (Filtre) : Recherche du style GROOVE_POILU...");
        const filtre = maPlaylist.filtrerParStyle(StyleMusical.GROOVE_POILU);
        console.log(`Nombre de titres Groove : ${filtre.length}`);

        // TEST 8 : Gestion d'erreur 
        console.log("\n--- Test 8 (Erreur) : Tentative de recherche vide...");
        await rechercherTitres("");

    } catch (error) {
        console.log("--- Résultat Test 8 : Erreur capturée avec succès !");
        console.log("Message d'erreur :", error);
    }

    console.log("\n=== TOUS LES TESTS SONT TERMINÉS ===");
}

main();