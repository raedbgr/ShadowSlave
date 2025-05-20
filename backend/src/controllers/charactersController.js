const Character = require('../models/character');

// Get all characters
exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
}; 