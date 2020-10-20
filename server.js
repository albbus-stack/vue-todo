const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use("/static", express.static('./static/'));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log(`Node server listening on port ${app.get('port')}!`));