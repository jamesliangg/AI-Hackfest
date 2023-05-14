import {exec} from "child_process";
let sourceUri = process.env.MONGO_CONNECT_STRING;
let sourceDatabase = process.env.SOURCE_DATABASE;
let sourceCollection = process.env.SOURCE_COLLECTION;
let targetUri = process.env.AZURE_CONNECT_STRING;

try {
    exec("mongoexport --uri=\"" + sourceUri + "\" --db=\"" + sourceDatabase + "\" --collection=\"" + sourceCollection + "\" --out=export.json", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
} catch (err) {
    console.log(err.message)
}

try {
    exec("mongoimport --uri=\"" + targetUri + "\" --db \"" + sourceDatabase + "\" --collection \"" + sourceCollection + "\" --ssl --type json --writeConcern=\"{w:0}\" --file export.json", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
} catch (err) {
    console.log(err.message)
}
