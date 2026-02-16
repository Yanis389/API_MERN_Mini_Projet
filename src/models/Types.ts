export enum StyleMusical {
    ROCK_DES_CAVERNES = "ROCK_DES_CAVERNES",
    GROOVE_POILU = "GROOVE_POILU",
    ELECTRO_MOUSTACHE = "ELECTRO_MOUSTACHE",
    CHILL_DU_DUVET = "CHILL_DU_DUVET"
}

export interface Chanson {
    titre: string;
    artiste: string;
    duree: number;
    style: StyleMusical;
}