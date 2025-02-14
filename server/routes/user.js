const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// create, find, update, delete
router.get('/', userController.view);
router.post('/', userController.find);
router.get('/addusuario', userController.form);
router.post('/addusuario', userController.create);
router.get('/viewusuario/:id', userController.viewall);
router.get('/editusuario/:id', userController.edit);
router.post('/editusuario/:id', userController.update);
router.get('/:id', userController.delete);

module.exports = router