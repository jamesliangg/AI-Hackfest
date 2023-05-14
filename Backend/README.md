## Deploying to Azure
Building Docker container
```
docker buildx build --platform=linux/amd64 --output type=docker -t jamesliangg/hackfest .

docker run -p 3001:3001 -e COHERE_API_KEY="<COHERE_KEY>" -e DEEPL_API_KEY="<DEEPL_KEY>" -e MONGO_CONNECT_STRING="<MONGO_CONNECT_STRING>" -e MONGO_DATABASE="<MONGO_DATABASE>" -e MONGO_COLLECTION="<MONGO_COLLECTION>" -d jamesliangg/hackfest

docker ps

docker logs <container id>

docker kill <container id>

docker push jamesliangg/hackfest
```

Image location
```
docker.io/jamesliangg/hackfest
```

Azure Container Creation
```
az container create --resource-group myResourceGroup --name mycontainer \
    --image docker.io/jamesliangg/hackfest --environment-variables COHERE_API_KEY="<COHERE_KEY>" DEEPL_API_KEY="<DEEPL_KEY>" \
    MONGO_CONNECT_STRING="<MONGO_CONNECT_STRING>" MONGO_DATABASE="<MONGO_DATABASE>" MONGO_COLLECTION="<MONGO_COLLECTION>" \ 
    --ip-address Public --ports 80 3001 --os-type Linux
```

API Endpoint
```

```

# API Doucmentation
POST Request

`http://<CONTAINER_PUBLIC_IP>:3001/api/endpoint`

## Actions
<hr>

## /writeMongo

Returns acknowledgement of write operation
### Request body data in raw JSON
```
{
    "action": "writeMongo",
    "mongoDatabase": "ares",
    "mongoCollection": "clinics",
    "input": {
        "name": "Grand River Hospital",
        "lat": 43.4562,
        "lng": -80.5120
    }
}
```

### Response
```
{
    "action": "writeMongo",
    "result": {
        "acknowledged": true,
        "insertedId": "64604dfc1f02e85fd83a58b2"
    }
}
```
<hr>

## /fetchMongo

Returns queried data
### Request body data in raw JSON
```
{
    "action": "fetchMongo",
    "mongoDatabase": "ares",
    "mongoCollection": "clinics",
    "queryKey": "index",
    "queryValue": 1002
}
```

### Response
```
{
    "action": "fetchMongo",
    "result": {
        "_id": "64604d085634be73d85258b5",
        "index": 1002,
        "facility_name": "Kinetic Energy Health and Wellness Centre",
        "source_facility_type": "",
        "odhf_facility_type": "Ambulatory health care services",
        "provider": "Province of British Columbia",
        "unit": "",
        "street_no": "207-450",
        "street_name": "lansdowne street",
        "postal_code": "V2C 1Y4",
        "city": "kamloops",
        "province": "bc",
        "source_format_str_address": "207-450 lansdowne street kamloops bc v2c 1y4",
        "CSDname": "Kamloops",
        "CSDuid": 5933042,
        "Pruid": 59,
        "latitude": 50.67706,
        "longitude": -120.3295
    }
}
```
<hr>

## /updateMongo

Returns acknowledgement of updateoperation
### Request body data in raw JSON
```
{
    "action": "updateMongo",
    "mongoDatabase": "ares",
    "mongoCollection": "clinics",
    "queryKey": "name",
    "queryValue": "Grand River Hospital",
    "updateValue": {
        "lng": -20
    }
}
```

### Response
```
{
    "action": "updateMongo",
    "result": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
```
<hr>

## /translate

Returns translation of input text
### Request body data in raw JSON
```
{
    "action": "translate",
    "inputText": "Hello, my name is John Smith",
    "targetLanguage": "fr"
}
```

### Response
```
{
    "action": "translate",
    "result": {
        "translatedText": "Bonjour, je m'appelle John Smith",
        "targetLanguage": "fr"
    }
}
```
<hr>

## /translate

Returns analysis of input text language
### Request body data in raw JSON
```
{
    "action": "detectLanguage",
    "inputText": "Hello, my name is John Smith"
}
```

### Response
```
{
    "action": "detectLanguage",
    "result": {
        "inputLanguage": "en"
    }
}
```
<hr>

## Docker Reference
https://nodejs.org/en/docs/guides/nodejs-docker-webapp
https://everythingdevops.dev/building-x86-images-on-an-apple-m1-chip/
https://stackoverflow.com/questions/34198392/docker-official-registry-docker-hub-url

## Azure Reference
https://learn.microsoft.com/en-us/azure/container-instances/container-instances-quickstart
https://learn.microsoft.com/en-us/cli/azure/container?view=azure-cli-latest#az-container-create
https://learn.microsoft.com/en-us/azure/container-instances/container-instances-update

## Cohere Reference
https://docs.cohere.com/reference/detect-language-1

## DeepL Reference
https://github.com/DeepLcom/deepl-node

## MongoDB Reference
https://www.mongodb.com/docs/drivers/node/current/quick-start/
https://www.mongodb.com/docs/drivers/node/current/quick-reference/
https://www.mongodb.com/docs/database-tools/installation/installation-macos/
https://www.mongodb.com/docs/atlas/import/mongoimport/

## JavaScript Reference
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign