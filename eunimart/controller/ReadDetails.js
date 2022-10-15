    var fetch = require('fetch-sync');
    const endpoint = `https://reqres.in/api/users/data`;
    let array=[];
    fetch(endpoint)
    .then(res=>res.json())
    .then(d=>{
        details = [...d.data];
        array.push(...d.data);
    })
    module.exports = array;