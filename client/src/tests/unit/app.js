const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/hello', (req,res)=>res.json({msg:'hi'}));
module.exports = app;
