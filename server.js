const express = require('express');

const app = express();

let obj = {
    name : 'shivam'
}

obj.location = obj;

app.get('/' , (req , res) => {
    res.send(obj);
})

app.listen(5500)