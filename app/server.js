import express from 'express';
const app = express();
import bodyParser from "body-parser";
import {cohereDetectLanguage} from "./cohere-functions.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.send('Try calling the API endpoint');
});

app.post('/api/endpoint', async function (req, res) {
    const data = req.body;
    // const action = req.body.action;
    console.log('Received data: ', data);
    console.log("Cohere key: " + process.env.COHERE_API_KEY);
    let sampleText = "'Здравствуй, Мир'";
    let response = "No action received.";
    response = await cohereDetectLanguage(sampleText);
    console.log(response);
    res.send(response.body.results);
});

app.listen(3001, function() {
    console.log('Server listening at http://127.0.0.1:3001/api/endpoint');
});

