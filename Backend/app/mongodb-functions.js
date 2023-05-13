import {MongoClient} from "mongodb";

// Replace the uri string with your connection string.
let uri = process.env.MONGO_CONNECT_STRING;
const client = new MongoClient(uri);

export async function mongoQueryOne(queryKey, queryValue, mongoDatabase, mongoCollection) {
    let queryResult = "Error in query";
    try {
        const database = client.db(mongoDatabase);
        const collection = database.collection(mongoCollection);

        const query = { [queryKey]: queryValue };
        queryResult = await collection.findOne(query);

        console.log(queryResult);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return queryResult;
    }
}

export async function mongoInsertOne(input, mongoDatabase, mongoCollection) {
    let insertResult = "Error in insert";
    try {
        const database = client.db(mongoDatabase);
        const collection = database.collection(mongoCollection);

        let insert = {};
        Object.assign(insert, input);

        insertResult = await collection.insertOne(insert);

        console.log(insertResult);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return insertResult;
    }
}

export async function mongoUpdateOne(queryKey, queryValue, input, mongoDatabase, mongoCollection) {
    let updateResult = "Error in update";
    try {
        const database = client.db(mongoDatabase);
        const collection = database.collection(mongoCollection);

        let insert = {};
        Object.assign(insert, input);

        updateResult = await collection.updateOne(
            {[queryKey]: queryValue},
            {$set: insert}
        );

        console.log(updateResult);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return updateResult;
    }
}