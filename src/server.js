const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://painelStorm:painelStorm@painel-shard-00-00.iibjq.mongodb.net:27017,painel-shard-00-01.iibjq.mongodb.net:27017,painel-shard-00-02.iibjq.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-rspqrp-shard-0&authSource=admin&retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology:true
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);