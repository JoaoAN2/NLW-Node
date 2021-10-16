import "reflect-metadata";
import { createConnection } from "typeorm";



createConnection().then(connection => {
    console.log("Samerda tá funcionando!!!!!!!!!!")
}).catch(error => console.log(error));