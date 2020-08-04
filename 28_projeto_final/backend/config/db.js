const config = require('../knexfile.js')
const knex = require('knex')(config)

// rodar as migrations
knex.migrate.latest([config])
module.exports = knex