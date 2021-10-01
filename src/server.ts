import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import ejs from "ejs";
import path from "path";
import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
})

app
.use(express.urlencoded({extended: true}))
.use(express.static("node_modules"))
.use(express.static("public"))
.engine('html', ejs.renderFile)
.set('view engine', 'html')
.set("views",path.join(__dirname,"views"));

app.listen(3000, () => console.log("Server is running!!"));