

## Deploying to Azure
Building Docker container
```
docker buildx build --platform=linux/amd64 --output type=docker -t jamesliangg/hackfest .

docker run -p 3001:3001 -e COHERE_API_KEY="<COHERE_KEY>" -d jamesliangg/hackfest

docker ps

docker logs <container id>

docker kill <container id>

docker push jamesliangg/hackfest
```

Image location
```
docker.io/jamesliangg/hackfest
```

API Endpoint
```
http://<CONTAINER_PUBLIC_IP>:3001/api/endpoint
```

## Docker reference
https://nodejs.org/en/docs/guides/nodejs-docker-webapp
https://everythingdevops.dev/building-x86-images-on-an-apple-m1-chip/
https://stackoverflow.com/questions/34198392/docker-official-registry-docker-hub-url

## Azure reference
https://learn.microsoft.com/en-us/azure/container-instances/container-instances-quickstart