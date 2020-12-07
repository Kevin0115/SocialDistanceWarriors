var express = require('express');
var router = express.Router();

var reports_controller = require('../controllers/reports_controller');

router.get('/', reports_controller.get_all_reports);

router.get('/:report_id', reports_controller.get_report_by_id);

router.post('/', reports_controller.create_report);

router.delete('/:report_id', reports_controller.delete_report);

router.put('/:report_id/status', reports_controller.update_report_status);

router.put('/:report_id/details', reports_controller.update_report_details);

module.exports = router;