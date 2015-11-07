var express = require('express');
var router = express.Router();

var dummy_data =
  [{
      "year": 2015,
        "sememster": "spring",
          "professor": "최광무",
            "subject": "형식언어및오토마타",
  }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jokbo', {'jokbos': dummy_data});
});

module.exports = router;
