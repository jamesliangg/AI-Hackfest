import express from 'express';
const app = express();
import bodyParser from "body-parser";
import {cohereDetectLanguage} from "./cohere-functions.js";
import {deepTranslate} from "./deepl-functions.js";
import {mongoInsertOne, mongoUpdateOne, mongoQueryOne, mongoQueryMultiple} from "./mongodb-functions.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.send('Try calling the API endpoint');
});

app.post('/api/endpoint', async function (req, res) {
    const data = req.body;
    const action = req.body.action;
    console.log(req.ip);
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    console.log(dateTime);
    console.log('Received data: ', data);
    let response = "No action received.";
    let result = "";

    switch(action) {
        case "writeMongo":
            result = await mongoInsertOne(req.body.input, req.body.mongoDatabase, req.body.mongoCollection);
            break;
        case "fetchMongo":
            result = await mongoQueryOne(req.body.queryKey, req.body.queryValue, req.body.mongoDatabase, req.body.mongoCollection);
            break;
        case "fetchMongoMultiple":
            result = await mongoQueryMultiple(req.body.queryKey, req.body.minValue, req.body.maxValue, req.body.queryKey2, req.body.minValue2, req.body.maxValue2, req.body.mongoDatabase, req.body.mongoCollection);
            break;
        case "updateMongo":
            result = await mongoUpdateOne(req.body.queryKey, req.body.queryValue, req.body.updateValue, req.body.mongoDatabase, req.body.mongoCollection);
            break;
        case "translate":
            let translatedText = await deepTranslate(req.body.inputText, req.body.targetLanguage);
            result = {
                "translatedText": translatedText,
                "targetLanguage": req.body.targetLanguage
            }
            break;
        case "detectLanguage":
            let inputLanguage = await cohereDetectLanguage(req.body.inputText);
            inputLanguage = inputLanguage.body.results[0].language_code;
            result = {"inputLanguage": inputLanguage};
            break;
    }

    // console.log("Cohere key: " + process.env.COHERE_API_KEY);
    // console.log("DeepL key: " + process.env.DEEPL_API_KEY);
    // console.log("MongoDB key: " + process.env.MONGO_CONNECT_STRING);

    response = JSON.stringify({
        "action": action,
        "result": result
    });
    console.log(response);
    res.send(response);
});

app.listen(3001, function() {
    console.log('Server listening at http://127.0.0.1:3001/api/endpoint');
});

