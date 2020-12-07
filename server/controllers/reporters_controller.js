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

exports.create_reporter = async (req, res) => {
  const reporter_id = req.body.reporter_id;
  const name = req.body.name;
  const phone = req.body.phone;
  const address = req.body.address;
  const email = req.body.email;
  const rank = 100;

  query = {
    text: `insert into reporters
            values ($1,$2,$3,$4,$5,$6)`,
    values: [reporter_id, name, phone, address, email, rank]
  }

  try {
    const query_result = await connection.query(query);
    console.log(query_result);
    res.send({
      success: true,
      content: reporter_id
    });
  } catch(err) {
    console.error(err);
    res.send({
      success: false,
      content: err.detail
    });
  }
}
 
exports.delete_reporter = async (req, res) => {
  const report_id = req.params.reporter_id;
  query = {
    text: `delete from reporters
            where reporter_id = $1`,
    values: [reporter_id]
  }

  try {
    const query_result = await connection.query(query);
    res.send({
      success: true,
      content: report_id
    })
  } catch(err) {
    console.error(err);
    res.send({
      success: false,
      content: err.detail
    });
  }
}
