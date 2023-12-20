require('dotenv').config();

const express = require('express');
const routes = require('./router/post_router');
const getroutes=require('./router/get_router');
const delroutes =require('./router/del_router')
const putrouter =require('./router/update_router')

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  
const PORT = 5000;

app.use('/', routes);
app.use('/', getroutes);
app.use('/',delroutes)
app.use('/',putrouter)



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
