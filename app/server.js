import express from 'express';
const app = express();
import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.send('Try calling the API endpoint');
});

app.post('/api/endpoint', async function (req, res) {
    const data = req.body;
    // const action = req.body.action;
    console.log('Received data:', data);

    let response = "No action received.";
    res.send(response);
});

app.listen(3001, function() {
    console.log('Server listening at http://127.0.0.1:3001/api/endpoint');
});