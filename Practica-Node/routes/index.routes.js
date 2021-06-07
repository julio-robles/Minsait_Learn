const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).render('index', { title: 'Ecommerce' });
});

router.get('/register', (req, res, next) => {
  res.render('register');
});
router.get('/login', (req, res, next) => {
  res.render('login');
});

module.exports = router;