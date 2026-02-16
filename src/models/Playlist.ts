import { type Chanson, StyleMusical } from "./Types.js";

export class Playlist {
    public nom: string;
    private titres: Chanson[] = [];

    constructor(nom: string) {
        this.nom = nom;
    }

    ajouter(chanson: Chanson): void {
        this.titres.push(chanson);
    }

    retirer(index: number): void {
        this.titres.splice(index, 1);
    }

    obtenirDureeTotale(): number {
        return this.titres.reduce((acc, c) => acc + c.duree, 0);
    }

    jouerAleatoire(): void {
        if (this.titres.length === 0) return;
        const auHasard = this.titres[Math.floor(Math.random() * this.titres.length)];
        console.log(`✨ Samer Poilu diffuse : "${auHasard?.titre}" de ${auHasard?.artiste}`);
    }

    filtrerParStyle(style: StyleMusical): Chanson[] {
        return this.titres.filter(t => t.style === style);
    }

    getTitres(): Chanson[] {
        return [...this.titres];
    }
}