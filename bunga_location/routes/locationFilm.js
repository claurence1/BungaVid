var models  = require('../models');
var express = require('express');
var router  = express.Router();

module.exports = (express) => {
    // http:get /locationFilm
    
    router.get('/', (req, res) => {
    models.db.LocationFilm.findAll({ raw: true }).then(film => {
        res.send(
            JSON.stringify(film)
        );
    });
});

// http:post /locationFilm
router.post('/', (req, res) => {
    models.db.LocationFilm.create({
        nomFilm: req.body.nomFilm,
        nomClient: req.body.descriptionFilm,
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});

// http:get /locationFilm/id
router.get('/:id', (req, res) => {
    models.db.LocationFilm.findOne({
        where: { id: req.params.id }
    }).then(t => {
        console.log(t);
        res.status(201).send(JSON.stringify(t));
    }).catch(err => {
        res.status(400).send(JSON.stringify(err));
    });
});


// http:delete /locationFilm/id
router.delete('/:id', (req, res) => {
    models.db.LocationFilm.destroy({
        where: { id: req.params.id }
    }).then(t => {
        res.status(201).send(JSON.stringify(t));
    }).catch((err) => {
        res.status(400).send(JSON.stringify(err))
    });
});

// http:update /locationFilm/{id}
router.put('/:id', (req, res) => {
    models.db.LocationFilm.update({
        nomFilm: req.body.nomFilm,
        nomClient: req.body.descriptionFilm
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
