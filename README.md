# Status du TP : Rendu

## Notes
- Entraide avec Camille Laurence, Axel Mazel et Hugo Dubouis étant donné que Camille était en arrêt maladie pendant tout le cours de webservice.

## Problème rencontré
- Problème de build des services avec Docker. Quand on lance le npm install puis start sur chacun des services, hors docker, ça fonctionne. Mais une fois que c'est sous docker on a un soucis. Outre le problème de port, d'adresse IP. Ce sont carrement des soucis avec des packages qu'on utilise.

- Facteur temps, investir autant de temps dans un TP c'est super compliqué faut prendre en compte :
-- Que ça fait des mois qu'on a pas vu nos familles et la fête des mères et pentecote sont des moments où on est partie retrouver nos famille.
-- Le fait qu'on soit pas bon de base en NodeJS, Angular et Docker et que du coup on se forme toujours sur le tas.
-- Qu'on a une alternance à côté et en plus de ça d'autres sont freelance avec des clients.
Donc il est compliqué de pouvoir libérer autant de temps. Et les 2 jours qu'on a eu de cours pour le TP n'était pas suffisant au vu de notre nullité.


## Requirements
- `docker-compose up`

-----------------
## Bunga Objects :

/films/
=> GET & POST
/films/:filmId
=> GET & PATCH & DELETE

## Bunga Location : 

/locationFilms/
=> GET & POST
/locationFilms/:locationFilmId
=> GET & PATCH & DELETE

## Bunga Utilisateur :


/api/login
=> POST (création de compte)
/api/:id
=> DELETE & GET
/api/
=> POST & GET

## Bunga Détails :