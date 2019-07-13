//For functions accessing the database
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./data.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

module.exports = {
    db,
    generatePokemonTable: function() {
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
        for(i = 1; i <= 809; i++){
            id = i;
//loop through all pokedex entries
        }
    },
    updateRarity: function(id, rarity) {

    }
}