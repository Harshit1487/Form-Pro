require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const formRouter = require("./router/form-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin: "https://localhost:3000/signup",
    methods: "GET, POST, PUT DELETE, PATCH, HEAD",
    Credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", router)
app.use("/api/data", formRouter)

app.use(errorMiddleware)

// app.get("/", (req, res) => {
//     res.status(200).send("welcome...")
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("Register page...")
// });

const PORT = 5000;

connectDb().then(() => {
   app.listen(PORT, () => {
    console.log("server is running at port: 5000")
    }); 
})
