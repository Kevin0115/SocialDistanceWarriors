var express = require('express');
var router = express.Router();

var reports_controller = require('../controllers/reports_controller');

router.get('/', reports_controller.get_all_reports);

router.get('/:report_id', reports_controller.get_report_by_id);

router.post('/', reports_controller.create_report);

router.delete('/:report_id', reports_controller.delete_report);

module.exports = router;