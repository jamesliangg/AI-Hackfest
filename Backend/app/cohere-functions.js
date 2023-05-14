import cohere from "cohere-ai";
cohere.init(process.env.COHERE_API_KEY);

export async function cohereDetectLanguage(input) {
    try {
        input = [input];
        const response = await cohere.detectLanguage({
            texts: input,
        });
        return response;
    } catch (err) {
        return err.message;
    }
}