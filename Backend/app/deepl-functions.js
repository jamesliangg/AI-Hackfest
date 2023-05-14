import * as deepl from 'deepl-node';

const authKey = process.env.DEEPL_API_KEY; // Replace with your key
const translator = new deepl.Translator(authKey);

export async function deepTranslate(input, targetLanguage) {
    try {
        const result = await translator.translateText(input, null, targetLanguage);
        console.log(result.text);
        return result.text;
    } catch(err) {
        return err.message;
    }

}