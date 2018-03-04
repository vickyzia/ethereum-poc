const express = require('express')
const Web3 = require('web3')
const app = express()

var path = require('path');



app.get('/', function(req, res) {
    res.sendFile(path.join('/home/waqas/testapp/files' + '/index.html'));
});
app.use(express.static('files'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
