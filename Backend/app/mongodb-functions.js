import {MongoClient} from "mongodb";

// Replace the uri string with your connection string.
let uri = process.env.MONGO_CONNECT_STRING;
const client = new MongoClient(uri);

export async function mongoQuery(queryKey, queryValue) {
    let queryResult = "Error in query"
    try {
        const database = client.db('apollo');
        const collection = database.collection('ingredients');

        const query = { [queryKey]: queryValue };
        queryResult = await collection.findOne(query);

        console.log(queryResult);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return queryResult;
    }
}

export async function mongoInsert() {
    let insertResult = "Error in insert"
    try {
        const database = client.db('apollo');
        const collection = database.collection('ingredients');

        const insert = {
            ingredient: 'bubble tea',
            health: true
        };

        insertResult = await collection.insertOne(insert);

        console.log(insertResult);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return insertResult;
    }
}