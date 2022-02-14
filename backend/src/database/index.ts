import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(connection => console.log("Conexão com o Banco de Dados estabelecida 🎲") ).catch(error => console.log(error));