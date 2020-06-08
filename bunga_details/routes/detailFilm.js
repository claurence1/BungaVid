var models  = require('../models');
var express = require('express');
var router  = express.Router();

module.exports = (express) => {
    // http:get /film/details
    
    router.get('/', (req, res) => {
    models.db.DetailFilm.findAll({ raw: true }).then(film => {
        res.send(
            JSON.stringify(film)
        );
    });
});

// http:post /film/details
router.post('/', (req, res) => {
    models.db.DetailFilm.create({
        nomFilm: req.body.nomFilm,
        descriptionFilm: req.body.descriptionFilm,
        prixFilm: req.body.prixFilm
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});

// http:get /film/details/id
router.get('/:id', (req, res) => {
    models.db.DetailFilm.findOne({
        where: { id: req.params.id }
    }).then(t => {
        console.log(t);
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});


// http:delete /film/details/id
router.delete('/:id', (req, res) => {
    models.db.DetailFilm.destroy({
        where: { id: req.params.id }
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch((err) => {
        res.status(400).send(JSON.stringify(err))
    });
});

// http:update /film/details/{id}
router.put('/:id', (req, res) => {
    models.db.DetailFilm.update({
        nomFilm: req.body.nomFilm,
        descriptionFilm: req.body.descriptionFilm,
        prixFilm: req.body.prixFilm
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
