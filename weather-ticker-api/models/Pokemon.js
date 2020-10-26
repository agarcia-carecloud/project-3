const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema(
  {
    pokemonId: {
      type: Number,
    },
    isAddedToFavorites: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Pokemon", pokemonSchema);
