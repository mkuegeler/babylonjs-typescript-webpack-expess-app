// start app with run and port as parameter
run(3000)

// run function (MAIN)
function run(p) {
    // express server
    const express = require('express');  
    const app = express();   

    // setup directory for static files (html, css, etc.)
    app.use(express.static('public'));

    // server root: static index.html
    app.get('/', function (req, res) {
        res.sendFile('index.html');        
    });
    
    app.listen(p, () => console.log('Example app listening on port ' + p + '!'))
}
