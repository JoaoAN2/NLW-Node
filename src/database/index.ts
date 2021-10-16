import "reflect-metadata";
import { createConnection } from "typeorm";



createConnection().then(connection => {
    console.log("BD no Ar")
}).catch(error => console.log(error));