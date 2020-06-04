import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Film } from '../models/film';

@Component({
  selector: 'app-liste-film',
  templateUrl: './liste-film.component.html',
  styleUrls: ['./liste-film.component.css']
})
export class ListeFilmComponent implements OnInit {
  error: Boolean = false;
  errorText: String = "";

  // Liste des film
  public films: Film[] = [];
  public film: Film;

  // Liste des colonnes de la tables
  filmListColumns: string[] = ['nomFilm', 'descriptionFilm', 'prixFilm', 'reserver'];

  constructor(private as: ApiService) {
    this.as.getAllFilms().subscribe((_film: Film[]) => {
      this.films = _film;
    });
    console.log(this.filmListColumns);
  }

  ngOnInit() {
  }

  reserverFilm(data){
   nonFilm: String = data.nomFilm;
   //nomClient: String = 
  }

}
