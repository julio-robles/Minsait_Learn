const express = require('express');
require('../db/conection.js');
const Game = require('../db/models/game');
const User = require('../db/models/user');

const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');


const LIMIT = 10;


router.get('/', async (req, res) => {
	try {
		const skip = 0;
		const next = String(skip + LIMIT);
		const prev = String(skip - LIMIT);
		const games = await Game.find().sort({createdAt: 'descending'}).limit(LIMIT);
		return res.status(200).render('games', { title: "game-shop", games: games, next: next , prev: prev });
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/next/:n', async (req, res) => {
	try {
		const skip = Number(req.params.n);
		const next = String(skip + LIMIT);
		const prev = String(skip - LIMIT);
		const games = await Game.find().sort({createdAt: 'descending'}).skip(skip).limit(LIMIT);
		return res.status(200).render('games', { title: "game-shop", games: games, next: next , prev: prev});
	} catch (err) {
		return res.status(500).json(err);
	}
});


const fileMiddlewares = require('../middlewares/file.middleware');
router.post('/create', [fileMiddlewares.upload.single('image'), fileMiddlewares.uploadToCloudinary], async (req, res, next) => {
	const picture = req.file_url || null;

    try {
      // Crearemos una instancia de mascota con los datos enviados
      const newGame = new Game({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image:picture
      });
  
      // Guardamos la mascota en la DB
      	await newGame.save();
  		return res.redirect('/games');

    } catch (err) {
		next(err);
    }
  });
  router.put('/edit', async (req, res, next) => {
	try {
	  const id = req.body.id;
  
	  const updatedGame = await Game.findByIdAndUpdate(
		id, // La id para encontrar el documento a actualizar
		{   
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			image:req.body.image 
		}, // Campos que actualizaremos
		{ new: true } // Usando esta opción, conseguiremos el documento actualizado cuando se complete el update
	  );
  
	  return res.status(200).json(updatedGame);
	} catch (err) {
	  next(err);
	}
  });

    router.get('/upload', [authMiddleware.isAdmin], (req, res, next) => {
		res.status(200).render('upload');
 	});

  router.delete('/game/:id', [authMiddleware.isAdmin], async (req, res, next) => {
	try {
	  const id = req.params.id;	  
	  await Game.findByIdAndDelete(id);
	  return res.status(200).redirect('/games');
	} catch (err) {
	  next(err);
	}
  });

  router.get('/game/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const game = await Game.findById(id);
		if (game) {
			return res.status(200).render('game', { title: "game-shop", id: id,  game: game });
		}
	} catch (err) {
		return res.status(500).render('game', { title: "game-shop" });
	}
});

router.post('/search', async (req, res) => {
	const search = req.body.title;
	try {
		const games = await Game.find({'title': { $regex: search, $options: 'i' }}).sort({createdAt: 'descending'});
		return res.status(200).render('games', { title: "game-shop", games: games });
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.post('/filter', async (req, res) => {
	const min = req.body.min;
	const max = req.body.max;
	try {
		const games = await Game.find({'price': {$gte: min}, 'price': {$lte: max}}).sort({createdAt: 'descending'});
		return res.status(200).render('games', { title: "game-shop", games: games });
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/cart', async (req, res) => {
	const userGames = await User.findById(req.session.passport.user).populate('cart');
	if (userGames.cart[0]){
		let total = 0;
		console.log("first holaaaaaaaa");
		for (x in userGames.cart){
			total += Number(userGames.cart[x]['price']);
			console.log(total);
		}
		return res.status(200).render('cart', { title: "game-shop cart", games: userGames.cart, total: total });
	}
	else
		return res.status(200).render('cart', { title: "game-shop cart", games: userGames.cart });
});

router.post('/cart', async (req, res) => {
	const id = req.body.id;	
	try {
		const user = await User.findById(req.session.passport.user).populate('cart');
		user.cart.push(id);
		await user.save();
		return res.status(200).redirect('/games/cart');
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.delete('/cart', async (req, res) => {
	try {
		const user = await User.findById(req.session.passport.user);		
		user.cart = undefined;
		await user.save();
		return res.status(200).redirect('/games');
	} catch (err) {
		return res.status(500).json(err);
	}
});

module.exports = router;




