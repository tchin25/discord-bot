//For functions accessing the database
const sqlite3 = require('sqlite3');
const Fetch = require('node-fetch');

const baseUrl = 'https://pokeapi.co/api/v2/';

let db = new sqlite3.Database('./data.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

module.exports = {
    db,
    generatePokemonTable: async function() {
        let id = 0;
        let name = "";
        let sql =
            `INSERT INTO rarity (
                id,
                name,
                rarity
            )
            VALUES(
                ${id},
                ${name},
                -1
            )
            `;
        for(i = 1; i <= 10; i++){
            id = i;
            await Fetch(baseUrl + 'pokemon/' + i)
                .then(res => res.json())
                .then(json => console.log(json.name));
        }
    },
    updateRarity: function(id, rarity) {

    }
}