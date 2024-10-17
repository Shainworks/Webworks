/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Darshan');

// Insert a few documents into the Pokemons collection.
db.getCollection('Pokemons').insertMany([
  {
    "Name": "Pikachu",
    "Type": "Electric",
    "Level": 10
  },
  {
    "Name": "Charmander",
    "Type": "Fire",
    "Level": 15
  },
  {
    "Name": "Bulbasaur",
    "Type": "Grass",
    "Level": 12
  },
  {
    "Name": "Squirtle",
    "Type": "Water",
    "Level": 14
  },
  {
    "Name": "Jigglypuff",
    "Type": "Fairy",
    "Level": 8
  },
  {
    "Name": "Geodude",
    "Type": "Rock",
    "Level": 18
  },
  {
    "Name": "Zubat",
    "Type": "Flying",
    "Level": 11
  },
  {
    "Name": "Eevee",
    "Type": "Normal",
    "Level": 16
  },
  {
    "Name": "Pidgey",
    "Type": "Flying",
    "Level": 9
  },
  {
    "Name": "Snorlax",
    "Type": "Normal",
    "Level": 20
  },
  {
    "Name": "Onix",
    "Type": "Rock",
    "Level": 22
  }
]
);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`The data has been uploaded to Darshan DB of Pokemons collection`);

