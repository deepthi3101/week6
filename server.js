const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/say', (req, resp) => {
    const url = 'https://zctmgdn5c0.execute-api.us-east-1.amazonaws.com/v1/week6' + '?keyword=' + req.query.keyword;
    axios.get(url)
        .then((response) => {
            resp.send(response.data.body);
        })
        .catch(error => {
            throw error;
        });
});

app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
});