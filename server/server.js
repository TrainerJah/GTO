const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({origin: "http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 8000;
require('./config/mongoose.config');
require('./routes/trainer.routes')(app);

app.listen(port, () => console.log(`We ON Dat port: ${port}`));