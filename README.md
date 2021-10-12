# nodejs-mit
### Aplicación Web en NodeJS con express Framework.

```
docker build -t nodejs-mit-image .
docker run -ti --name nodejs-mit -p 3000:3000 -v $(pwd):/app --name nodejs-mit nodejs-mit-image
```
