// Archivo seed.js
const mongoose = require('mongoose');

const Game = require('../models/game');

const game = [
  {
    title: 'Red Dead Redemption',
    description: '',
    price: 57,
    image: '',
  },
  {
    title: 'Rachet & Clank 1',
    description: '',
    price: 10,
    image: '',
  },
  {
    title: 'Rachet & Clank 2',
    description: '',
    price: 20,
    image: '',
  },
  {
    title: 'Rachet & Clank 3',
    description: '',
    price: 25,
    image: '',
  },
  {
    title: 'Jak & Daxter 1',
    description: '',
    price: 19,
    image: '',
  },
  {
    title: 'Jak & Daxter 2',
    description: '',
    price: 23,
    image: '',
  },
  {
    title: 'Jak & Daxter 3',
    description: '',
    price: 27,
    image: '',
  },
  {
    title: 'Call of Duty Black Ops 1',
    description: '',
    price: 7,
    image: '',
  },
  {
    title: 'Call of Duty Black Ops 2',
    description: '',
    price: 27,
    image: '',
  },
  {
    title: 'Call of Duty Black Ops 3',
    description: '',
    price: 32,
    image: '',
  },
  {
    title: 'Call of Duty Black Ops 4',
    description: '',
    price: 93,
    image: '',
  },
  {
    title: 'Forza Horizon 1',
    description: '',
    price: 17,
    image: '',
  },
  {
    title: 'Forza Horizon 2',
    description: '',
    price: 23,
    image: '',
  },
  {
    title: 'Forza Horizon 3',
    description: '',
    price: 43,
    image: '',
  },
  {
    title: 'Forza Horizon 4',
    description: '',
    price: 57,
    image: '',
  },
  {
    title: 'Grand Theft Auto 1',
    description: '',
    price: 5,
    image: '',
  },
  {
    title: 'Grand Theft Auto 2',
    description: '',
    price: 10,
    image: '',
  },
  {
    title: 'Grand Theft Auto 3',
    description: '',
    price: 20,
    image: '',
  },
  {
    title: 'Grand Theft Auto 4',
    description: '',
    price: 40,
    image: '',
  },
  {
    title: 'Grand Theft Auto 5',
    description: '',
    price: 60,
    image: '',
  }
];

const gameDocuments = game.map(game => new Game(game));



mongoose
  .connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allGames = await Game.find();
		
    if (allGames.length) {
      await Game.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await Game.insertMany(gameDocuments);
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());