import {MongoClient} from "mongodb";

// Replace the uri string with your connection string.
let uri = process.env.MONGO_CONNECT_STRING;

export async function mongoQueryOne(queryKey, queryValue, mongoDatabase, mongoCollection) {
    const client = new MongoClient(uri);
    let queryResult = "Error in query";
    try {
        const database = client.db(mongoDatabase);
        const collection = database.collection(mongoCollection);

        const query = { [queryKey]: queryValue };
        queryResult = await collection.findOne(query);

        console.log(queryResult);
    } catch(err) {
        queryResult = err.message;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return queryResult;
    }
}

export async function mongoQueryMultiple(queryKey, minValue, maxValue, queryKey2, minValue2, maxValue2, mongoDatabase, mongoCollection) {
    const client = new MongoClient(uri);
    let queryResult = "Error in query";
    try {
        const database = client.db(mongoDatabase);
        const collection = database.collection(mongoCollection);
        queryResult = await collection.find({
            [queryKey]: {$gte : minValue, $lte : maxValue},
            [queryKey2]: {$gte : minValue2, $lte : maxValue2}
        }).toArray();

        console.log(queryResult);
    } catch(err) {
        queryResult = err.message;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return queryResult;
    }
}

export async function mongoInsertOne(input, mongoDatabase, mongoCollection) {
    const client = new MongoClient(uri);
    let insertResult = "Error in insert";
    try {
        const database = client.db(mongoDatabase);
        const collection = database.collection(mongoCollection);

        let insert = {};
        Object.assign(insert, input);

        insertResult = await collection.insertOne(insert);

        console.log(insertResult);
    } catch(err) {
        insertResult = err.message;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return insertResult;
    }
}

export async function mongoUpdateOne(queryKey, queryValue, input, mongoDatabase, mongoCollection) {
    const client = new MongoClient(uri);
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
    } catch(err) {
        updateResult = err.message;
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
        return updateResult;
    }
}