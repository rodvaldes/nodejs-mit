# nodejs-mit
### Aplicación Web en NodeJS con express Framework.

```
docker build -t nodejs-mit-image .
docker run -ti --name nodejs-mit -p 3000:3000 -v $(pwd):/app --name nodejs-mit nodejs-mit-image
```

```
docker run -ti --name nodejs-mit -p 3000:4000 --env PORT=4000 --env ORG="Akjj" -v $(pwd):/app -d --name nodejs-mit nodejs-mit-image
```

## Docker Compose

Ejecución con Docker Compose 

```
docker-compose up -d --build ---> Levanta ambiente de desarrollo.
docker-compose down          ---> Baja ambiente de desarrollo.
```