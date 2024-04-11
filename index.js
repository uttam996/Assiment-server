const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dontenv = require('dotenv');
dontenv.config();

const ConnectDB = require('./Db/dbconnect');
const componentRoutes = require('./Routes/component.routes');
const apicountRoutes = require('./Routes/apicount.routes');



const app = express();
let port = process.env.PORT || 3000;

app.listen(port, () =>  console.log(`Example app listening at http://localhost:${process.env.PORT}`));

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/component', componentRoutes);
app.use('/api/count',apicountRoutes )


ConnectDB();














