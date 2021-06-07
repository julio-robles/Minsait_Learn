const express = require('express');
require('../db/conection.js');
const Game = require('../db/models/game');
const router = express.Router();



router.get('/', async (req, res) => {
	try {
		const games = await Game.find();
		return res.status(200).render('games', { title: "game-shop", games: games });
	} catch (err) {
		return res.status(500).json(err);
	}
});
router.get('/:id', async (req, res) => {
	const id = req.params.id;
	try {
		const game = await Game.findById(id);
		if (game) {
			return res.status(200).render('game', { title: "game-shop",  game: game });
		} else {
			return res.status(404).render('game', { title: "game-shop" });
		}
	} catch (err) {
		return res.status(500).render('game', { title: "game-shop" });
	}
});
router.get('/:title', async (req, res) => {
	const title = req.params.title;
	try {
		const games = await Game.find({title: title});

		if (games) {
			return res.status(200).render('games', { title: "game-shop",  games: games });
		} else {
			return res.status(404).json('No game found by this id');
		}
	} catch (err) {
		return res.status(500).json(err);
	}
});
router.post('/create', async (req, res, next) => {
    try {
      // Crearemos una instancia de mascota con los datos enviados
      const newGame = new Game({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image:req.body.image
      });
  
      // Guardamos la mascota en la DB
      const createdGame = await newGame.save();
      return res.status(200).json(createdGame);
    } catch (err) {
          // Lanzamos la función next con el error para que gestione todo Express
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
  router.delete('/:id', async (req, res, next) => {
	try {
	  const id = req.params.id;	  
	  await Game.findByIdAndDelete(id);
	  return res.status(200).json('Game deleted!');
	} catch (err) {
	  next(err);
	}
  });

module.exports = router;




