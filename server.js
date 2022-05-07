const express = require('express');
const webRouter = require('./routes1/web');
const apiRouter = require('./routes1/api');

const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use("/", webRouter);
app.use("/api", apiRouter);


app.listen(PORT, function(){
  console.log(`App is running on http://localhost:${PORT}`);
});

