var express = require('express');
var router = express.Router();

var reporters_controller = require('../controllers/reporters_controller');

router.get('/', reporters_controller.get_all_reporters);

router.get('/:reporter_id', reporters_controller.get_reporter_by_id);

router.post('/', reporters_controller.create_reporter);

router.delete('/:reporter_id', reporters_controller.delete_reporter);

module.exports = router;