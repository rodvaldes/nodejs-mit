# nodejs-mit

### Aplicación Web en NodeJS con express Framework.

https://youtu.be/9zUHg7xjIqQ


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


docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down 
```

## Mongo DB

https://hub.docker.com/_/mongo

```
docker exec -ti <container_id> bash
root@4eb345d40f60:/# mongo -u 'rvaldes' -p 'mypassword'
MongoDB shell version v5.0.3
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("ce50ac16-15ff-4ee3-9e15-0aa9df11a776") }
MongoDB server version: 5.0.3


use mydb
db.bandas.insert({"nombre": "Metallica"})
db.bandas.insert({"nombre": "Megadeth"})
db.bandas.insert({"nombre": "Volbeat"})
db.bandas.insert({"nombre": "The Offspring"})
db.bandas.insert({"nombre": "Iron Maiden"})
db.bandas.find()

show dbs
use <nombre_database>  --> Crea una nueva base de datos.
```

```
docker exec -ti <container_id> mongo -u 'rvaldes' -p 'mypassword'
docker exec -ti 4eb345d40f60 mongo -u 'rvaldes' -p 'mypassword'
```



