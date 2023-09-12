const express = require('express');
const {parse, stringify, toJSON, fromJSON} = require('flatted')

const app = express();

let obj = {
    name : 'shivam'
}

obj.location = obj;

app.get('/' , (req , res) => {
    let a = stringify(obj);
    res.send(a);
})

app.listen(5500)