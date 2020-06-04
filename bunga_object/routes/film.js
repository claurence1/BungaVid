var models  = require('../models');
var express = require('express');
var router  = express.Router();

module.exports = (express) => {
    // http:get /film
    
    router.get('/', (req, res) => {
    models.db.Film.findAll({ raw: true }).then(film => {
        res.send(
            JSON.stringify(film)
        );
    });
});

// http:post /film
router.post('/', (req, res) => {
    models.db.Film.create({
        nomFilm: req.body.nomFilm,
        descriptionFilm: req.body.descriptionFilm,
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});

// http:get /film/id
router.get('/:id', (req, res) => {
    models.db.Film.findOne({
        where: { id: req.params.id }
    }).then(t => {
        console.log(t);
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});


// http:delete /film/id
router.delete('/:id', (req, res) => {
    models.db.Film.destroy({
        where: { id: req.params.id }
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch((err) => {
        res.status(400).send(JSON.stringify(err))
    });
});

// http:update /film/{id}
router.put('/:id', (req, res) => {
    models.db.Film.update({
        nomFilm: req.body.nomFilm,
        descriptionFilm: req.body.descriptionFilm
    }, {
        where: { idFilm: req.params.id }
    }).then(t => {  
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});
    return router
}
