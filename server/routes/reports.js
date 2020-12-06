var express = require('express');
var router = express.Router();

var reports_controller = require('../controllers/reports_controller');

router.get('/', reports_controller.get_all_reports);



module.exports = router;