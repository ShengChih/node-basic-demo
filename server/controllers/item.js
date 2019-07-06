const utils = require('../utils');
const Item = require('../models/item');

module.exports = {
    list: function (req, res, next) {
        Item.find()
            .then(function (items) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(items));
            })
            .catch(function (err) {
                next(err);
            });
    },
    about: function (req, res, next) {
        res.send('About items');
    },
    create: function (req, res, next) {
        req.body.uid = utils.gen_uuid()
        new Item(req.body)
            .save()
            .then(function (item) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(item));            })
            .catch(function (err) {
                next(err)
            });
    },
    replace: function (req, res, next) {
        Item.findOneAndUpdate(
                { uid: req.body.uid },
                req.body,
                { upsert: true, new: true }
            )
            .then(function (item) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(item)); 
            })
            .catch(function (err) {
                next(err);
            });
    },
    update: function (req, res, next) {
        Item.findOneAndUpdate(
            { uid: req.body.uid },
            req.body,
            { new: true }
        )
        .then(function (item) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(item)); 
        })
        .catch(function (err) {
            next(err);
        });
    },
    destroy: function (req, res, next) {
        Item.findOneAndRemove(
            { uid: req.body.uid }
        )
        .then(function (item) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(item)); 
        })
        .catch(function (err) {
            next(err);
        });
    }
};