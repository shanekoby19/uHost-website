const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(`${path.join(path.normalize(`${__dirname}/..`), 'public')}`));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));