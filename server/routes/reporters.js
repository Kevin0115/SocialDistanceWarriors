var express = require('express');
var router = express.Router();

router.get('/', reporters_controller.get_all_reporters);

router.get('/', reporters_controller.get_reporter_by_id);

router.post('/', reporters_controller.create_reporter);

router.delete('/', reporters_controller.delete_reporter);

module.exports = router;