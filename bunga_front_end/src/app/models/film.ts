export class Film {
    id: number;
    nomFilm: string;
    descriptionFilm: string;
    prixFilm: string;

    constructor(nomFilm: string, descriptionFilm: string, prixFilm: string, id?: number){
            this.id = id;
            this.nomFilm = nomFilm;
            this.descriptionFilm = descriptionFilm;
            this.prixFilm = prixFilm;
    }
}
