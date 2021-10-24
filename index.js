const express = require("express");
const mongoose = require('mongoose');
const session = require("express-session");
const redis = require("redis");
const cors = require("cors");
let RedisStore = require("connect-redis")(session)

const {MONGO_PORT} = require("./config/config");
const {MONGO_IP} = require("./config/config");
const {MONGO_PASSWORD} = require("./config/config");
const {MONGO_USER} = require('./config/config')
const {REDIS_URL} = require("./config/config")
const {REDIS_PORT} = require("./config/config")
const {SESSION_SECRET} = require("./config/config")

const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")

let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT,
});
const app = express()

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () =>{
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then( () => console.log("Conexión exitosa a Mongo DB!!!"))
        .catch((e) => {
            console.log(e)
            setTimeout(connectWithRetry,5000)
        })
}

connectWithRetry();

app.enable("trust proxy");
app.use(cors({}));

app.use(session({
    store: new RedisStore({
        client: redisClient,
    }),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        httpOnly: true,
        maxAge: 60000,
    }
}))

app.use(express.json());

app.get("/api/v1", (req,res) => {
    res.send("<h1>App Node JS.</h1><h1>Rodrigo Valdés!!!!</h1>" +
        "<a>Aplicación NodeJS construida para hacer testing de conceptos devops.</a>" +
    "<h3>Copyright @Cybersyn 2021</h3>");
    console.log("Se ejecutó de manera correcta!!!")
});

app.get("/health" , (req,res) =>{
    res.send("<h1>UP</h1>");
});

app.use("/api/v1/posts",postRouter)
app.use("/api/v1/users",userRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Escuchando conexiones en el puerto ${port}`))