var proxy = require('express-http-proxy');
var app = require('express')();
var port = 3000
//fix ssl localhost
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use('/market', proxy('https://localhost:444'));
app.use('/sso', proxy('https://localhost:443'))
app.listen(port, () => console.log(`Example app listening at https://localhost:${port}`))