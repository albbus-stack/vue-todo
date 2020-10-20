const express = require('express');
const ex = express();
const path = require('path');
const router = express.Router();

ex.use("/static", express.static('./static/'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

ex.use('/', router);
ex.listen(process.env.port || 3000);