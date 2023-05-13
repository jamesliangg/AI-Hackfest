import cohere from "cohere-ai";
// import dotenv from "dotenv";
// import axios from "axios";
// dotenv.config();
// const cohere_key = process.env.COHERE_API_KEY;
cohere.init(process.env.COHERE_API_KEY);


// export async function cohereClassifyPurpose(input) {
//     let sampleData;
//     input = [input];
//     const classification = await cohere.classify({
//         inputs: input,
//         examples: sampleData,
//     });
//     return classification.body.classifications[0];
// }

// export async function cohereRerank(query, documents) {
//     const {data} = await axios.post('https://api.cohere.ai/v1/rerank', {
//         "return_documents": true,
//         "model": "rerank-english-v2.0",
//         "query": query,
//         "documents": documents,
//         "top_n": 3
//     }, {
//         headers: {
//             'accept': 'application/json',
//             'content-type': 'application/json',
//             'authorization': 'Bearer ' + cohere_key
//         }
//     })
//     // console.log(data);
//     return data;
// }

export async function cohereDetectLanguage(input) {
    input = [input];
    const response = await cohere.detectLanguage({
        texts: input,
    });
    return response;
}