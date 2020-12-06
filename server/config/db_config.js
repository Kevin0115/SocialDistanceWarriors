const { Pool } = require('pg');

const connection = new Pool({
  connectionString: "postgres://viumrvfu:p8gRlF81RatfJWKyqfjJd_oMxJbp6Q7D@suleiman.db.elephantsql.com:5432/viumrvfu",
  idleTimeoutMillis: 30000,
})

module.exports = connection;