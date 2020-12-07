const connection = require('../config/db_config');
const moment = require('moment');

exports.get_all_reports = async (req, res) => {
  query = {
    text: `select * from reports`
  }
  console.log(`line 8`);
  try {
    console.log(`line 10`);
    const query_result = await connection.query(query);
    console.log(`line 12`);
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

exports.get_report_by_id = async (req, res) => {
  const report_id = req.params.report_id;
  query = {
    text: `select *
            from reports
            where report_id = $1`,
    values: [report_id]
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

exports.create_report = async (req, res) => {
  const report_id = Math.floor((Math.random() * 9999999999) + 1).toString();
  const status = req.body.status;
  const reporter_id = Math.floor((Math.random() * 9999999999) + 1).toString();
  const ts = moment().format('YYYY-MM-DD hh:mm:ssA');
  const priority = 100;
  const location = req.body.location;
  const perp_name = req.body.perp_name;
  const details = req.body.details;

  query = {
    text: `insert into reports
            values ($1,$2,$3,$4,$5,$6,$7,$8)`,
    values: [report_id, status, reporter_id, ts, priority, location, perp_name, details]
  }

  try {
    const query_result = await connection.query(query);
    console.log(query_result);
    res.send({
      success: true,
      content: report_id
    });
  } catch(err) {
    console.error(err);
    res.send({
      success: false,
      content: err.detail
    });
  }
}

exports.delete_report = async (req, res) => {
  const report_id = req.params.report_id;
  query = {
    text: `delete from reports
            where report_id = $1`,
    values: [report_id]
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

exports.update_report_status = async (req, res) => {
  const report_id = req.params.report_id;
  const status = req.body.status;
  query = {
    text: `update reports
            set status = $2
            where report_id = $1`,
    values: [report_id, status]
  }

  try {
    const query_result = await connection.query(query);
    res.send({
      success: true,
      rowsUpdated: query_result.rowCount
    })
  } catch(err) {
    console.error(err);
    res.send({
      success: false,
      content: err.detail
    });
  }
}

exports.update_report_details = async (req, res) => {
  const report_id = req.params.report_id;
  const details = req.body.details;
  query = {
    text: `update reports
            set details = $2
            where report_id = $1`,
    values: [report_id, details]
  }

  try {
    const query_result = await connection.query(query);
    res.send({
      success: true,
      rowsUpdated: query_result.rowCount
    })
  } catch(err) {
    console.error(err);
    res.send({
      success: false,
      content: err.detail
    });
  }
}