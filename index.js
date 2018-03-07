var fs = require("fs");

fs.readFile(',mytext', (reject, data) =>{
    if(reject) throw reject;
    console.log("lenght:", data.length);
});