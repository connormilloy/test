const express = require('express');
const app = express();
const port = 3655;

app.listen(port, () => console.log(`Listening on ${port}!`));
app.get("/", (req, res) => {
    res.send("Server is up!");
})