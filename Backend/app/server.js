import express from 'express';
const app = express();
import bodyParser from "body-parser";
import {cohereDetectLanguage} from "./cohere-functions.js";
import {deepTranslate} from "./deepl-functions.js";
import {mongoInsertOne, mongoUpdateOne, mongoQueryOne} from "./mongodb-functions.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.send('Try calling the API endpoint');
});

app.post('/api/endpoint', async function (req, res) {
    const data = req.body;
    const action = req.body.action;
    console.log('Received data: ', data);
    let response = "No action received.";

    console.log("Cohere key: " + process.env.COHERE_API_KEY);
    // let sampleText = "'Здравствуй, Мир'";
    // let cohereResponse = await cohereDetectLanguage(sampleText);
    // cohereResponse = cohereResponse.body.results[0];
    // console.log(cohereResponse);

    console.log("DeepL key: " + process.env.DEEPL_API_KEY);
    // sampleText = "Hello world!";
    // let deeplResponse =  await deepTranslate(sampleText, "fr");

    console.log("MongoDB key: " + process.env.MONGO_CONNECT_STRING);
    const insert = {
        ingredient: 'bubble tea',
        health: true,
        filler: false,
        taste: true
    };
    const update = {
        health: false,
        filler: true,
        taste: false
    };
    const queryKey = "ingredient";
    const queryValue = "bubble tea";
    // let mongoResponse = await mongoQuery(queryKey, queryValue, process.env.MONGO_DATABASE, process.env.MONGO_COLLECTION);
    // let mongoResponse = await mongoInsertOne(insert, process.env.MONGO_DATABASE, process.env.MONGO_COLLECTION);
    // let mongoResponse = await mongoUpdateOne(queryKey, queryValue, update, process.env.MONGO_DATABASE, process.env.MONGO_COLLECTION);

    response = JSON.stringify({
        "action": action,
        // "cohere": cohereResponse,
        // "deepl": deeplResponse,
        // "mongo": mongoResponse
    });

    res.send(response);
});

app.listen(3001, function() {
    console.log('Server listening at http://127.0.0.1:3001/api/endpoint');
});

