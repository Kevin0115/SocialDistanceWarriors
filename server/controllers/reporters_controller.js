const connection = require('../config/db_config');
const moment = require('moment');

exports.get_all_reporters = async (req, res) => {
    query = {
      text: `select * from reporters`
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

exports.get_reporter_by_id = async (req, res) => {
  const reporter_id = req.params.reporter_id;
  query = {
    text: `select *
            from reporters
            where reporter_id = $1`,
    values: [reporter_id]
  }

  try {
    const query_result = await connection.query(query);
    res.send({
      success: true,
      content: query_result.rows[0]
    })
  } catch(err) {
    console.error(err);
    res.send({
      success: false,
      content: err.detail
    });
  }
}