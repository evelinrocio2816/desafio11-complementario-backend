
const mongoose = require("mongoose");
const { mongo_url } = require("../config/config");
const { log } = require("winston");


class BaseDatos {
    static #instance;

    constructor() {
        mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                log.info("Conexión exitosa a MongoDB");
            })
            .catch((error) => {
                log.error("Error al conectar a MongoDB:", error);
                // En este punto, podrías manejar el error de conexión de alguna manera apropiada para tu aplicación
            });
        }
    static getInstance(){
        if( this.#instance){
            console.log("Conexion Previa");
            return this.#instance
        }
        this.#instance = new BaseDatos()
            console.log("Conexion Exitosa!!");
        return this.#instance
    }
}
 module.exports = BaseDatos.getInstance();


