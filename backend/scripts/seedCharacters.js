require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Character = require('../src/models/character');
const connectDB = require('../src/config/db');

const characters = [
  {
    name: 'Sunless',
    true_name: 'Lost From Light',
    age: '26(current)',
    vital_status: 'Alive',
    rank: 'Saint(Transcendent)',
    class_name: 'Terror',
    aspect: 'Divine',
    flaw: 'Clear Conscience',
    image: 'sunny_illustration.png',
  },
  {
    name: 'Nephis',
    true_name: 'Changing Star',
    age: '26(current)',
    vital_status: 'Alive',
    rank: 'Saint(Transcendent)',
    class_name: 'Titan',
    aspect: 'Divine',
    flaw: 'Pristine Soul',
    image: 'nephis_illustration.png',
  },
  {
    name: 'Cassia',
    true_name: 'Song of the Fallen',
    age: '26(current)',
    vital_status: 'Alive',
    rank: 'Saint(Transcendent)',
    class_name: '――',
    aspect: 'Sacred',
    flaw: 'Blindness',
    image: 'cassie_illustration.png',
  },
  {
    name: 'Athena',
    true_name: 'Raised by Wolves',
    age: '28(current)',
    vital_status: 'Alive',
    rank: 'Saint(Transcendent)',
    class_name: '――',
    aspect: 'Transcendent',
    flaw: 'Glutton',
    image: 'effie_illustration.png',
  },
  {
    name: 'Jet',
    true_name: '――',
    age: '35(current)',
    vital_status: 'Active',
    rank: 'Saint(Transcendent)',
    class_name: '――',
    aspect: 'Supreme',
    flaw: 'You are dead',
    image: 'jet_illustration.png',
  },
  {
    name: 'Kai',
    true_name: 'Nightingale',
    age: '28(current)',
    vital_status: 'Alive',
    rank: 'Saint(Transcendent)',
    class_name: '――',
    aspect: 'Ascended',
    flaw: 'Lie Sense',
    image: 'kai_illustration.png',
  },
  {
    name: 'Mordret',
    true_name: '――',
    age: '30(current)',
    vital_status: 'Alive',
    rank: 'Saint(Transcendent)',
    class_name: 'Titan',
    aspect: 'Divine',
    flaw: '――',
    image: 'mordret_illustration.png',
  },
];

async function seed() {
  try {
    await connectDB();
    await Character.deleteMany({}); // Optional: clear existing
    await Character.insertMany(characters);
    console.log('Characters seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 