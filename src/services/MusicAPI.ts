import { type Chanson, StyleMusical } from "../models/Types.js";

export function rechercherTitres(requete: string): Promise<Chanson[]> {
    return new Promise((resolve, reject) => {
        console.log("☁️ Recherche en cours sur le Cloud de Samer Poilu...");

        setTimeout(() => {
            if (requete === "") {
                reject("⚠️ Recherche vide interdite dans la forêt !");
                return;
            }

            const catalogue: Chanson[] = [
                { titre: "La Danse du Poil", artiste: "Samer", duree: 185, style: StyleMusical.GROOVE_POILU },
                { titre: "Barbe à Papa Blues", artiste: "Les Moustachus", duree: 242, style: StyleMusical.ROCK_DES_CAVERNES },
                { titre: "Électro-Duvet", artiste: "DJ Samer", duree: 310, style: StyleMusical.ELECTRO_MOUSTACHE }
            ];

            resolve(catalogue);
        }, 2000);
    });
}