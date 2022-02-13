import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";

import "./database";

const app = express();

app
.use(cors())
.use(express.urlencoded({extended: false}))
.use(express.json())
.use(router)
.use((err: Error, request: Request, response: Response, next: NextFunction) => {
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

app.listen(3100, () => console.log("Servidor no ar na porta 3100 🚀"));