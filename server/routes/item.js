const express = require('express');
const router = express.Router();
const controller = require('../controllers/item');

// items/
router.get('/', controller.list);
router.post('/', controller.create);
router.put('/', controller.replace);
router.patch('/', controller.update);
router.delete('/', controller.destroy);

// items/about
router.get('/about', controller.about);



module.exports = router