var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    n_mask_weared: 8,
    n_mask_off: 2
  });
});

module.exports = router;