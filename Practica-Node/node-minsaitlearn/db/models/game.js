const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;