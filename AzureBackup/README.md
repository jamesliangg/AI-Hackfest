## Purpose
Clones MongoDB database to Azure Cosmos DB

## Building Docker container
```
docker buildx build --platform=linux/amd64 --output type=docker -t jamesliangg/azureexport .

docker run -e AZURE_CONNECT_STRING="<AZURE_CONNECT_STRING>" -e MONGO_CONNECT_STRING="<MONGO_CONNECT_STRING>" -e SOURCE_DATABASE="<SOURCE_DATABASE>" -e SOURCE_COLLECTION="<SOURCE_COLLECTION>" -d jamesliangg/azureexport

docker ps

docker logs <container id>

docker kill <container id>

docker push jamesliangg/azureexport
```

Image location
```
docker.io/jamesliangg/azureexport
```

## Azure Reference
https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/tutorial-mongotools-cosmos-db

## JavaScript Reference
https://stackabuse.com/executing-shell-commands-with-node-js/

## Docker Reference
https://stackoverflow.com/questions/67897212/how-to-install-mongodb-database-tools-in-a-dockerfile

## MongoDB Reference
https://www.mongodb.com/docs/database-tools/mongoexport/
https://www.mongodb.com/docs/database-tools/mongodump/
https://www.mongodb.com/docs/database-tools/installation/installation-linux/