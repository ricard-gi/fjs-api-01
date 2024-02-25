import express from 'express';

import { Pokemon } from '../models/index.js';
const Model = Pokemon;

const router = express.Router();

router.get('/', function (req, res, next) {
    Model.findAll({limit: 10})
        .then(items => res.json({
            ok: true,
            data: items
        }))
        .catch(error => res.json({
            ok: false,
            error: error
        }))

});

// GET un id
router.get('/:id', function (req, res, next) {
    Model.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(item => res.json({
            ok: true,
            data: item
        }))
        .catch(error => res.json({
            ok: false,
            error: error
        }))

});

// POST, creacio d'un item
router.post('/', function (req, res, next) {

    Model.create(req.body)
        .then((item) => res.json({
            ok: true,
            data: item
        }))
        .catch((error) => res.json({
            ok: false,
            error: error.message
        }))

});

// put modificació d'un item
router.put('/:id', function (req, res, next) {

    Model.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(item =>
            item.update(req.body))
        .then(item => res.json({
            ok: true,
            data: item
        }))
        .catch(error => res.json({
            ok: false,
            error: error.message
        }));

});

// DELETE elimina l'item id
router.delete('/:id', function (req, res, next) {
    Model.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((data) => res.json({
            ok: true,
            data
        }))
        .catch((error) => res.json({
            ok: false,
            error
        }))

});



export default router;
