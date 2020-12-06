const connection = require('../config/db_config');
const moment = require('moment');

exports.get_all_reports = async (req, res) => {
  query = {
    text: `select * from reports`
  }

  try {
    const query_result = await connection.query(query);
    res.send({
      success: true,
      content: query_result.rows
    });
  } catch(err) {
    console.error(err);
    res.send({
      success: false,
      content: err.detail
    });
  }
}