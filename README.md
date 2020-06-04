# Status du TP : Rendu

## Notes
- Entraide avec Camille Laurence, Axel Mazel et Hugo Dubouis étant donné que Camille étant pas présent durant les anciens TP.

## Problème rencontré
- 

## Requirements
- `docker-compose up`

-----------------
## Gestion des erreurs

### Erreur : 200
Opération réussi

### Erreur : 500
Service indisponible

###### By Axel Mazel


## Bunga Objects :

port 3000

/films/
=> GET & POST
/films/:filmId
=> GET & PATCH & DELETE

## Bunga Location : 

port 3002

/locationFilms/
=> GET & POST
/locationFilms/:locationFilmId
=> GET & PATCH & DELETE

## Bunga Utilisateur :

port 3004

/api/login
=> POST (création de compte)
/api/:id
=> DELETE & GET
/api/
=> POST & GET