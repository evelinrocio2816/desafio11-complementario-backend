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
            });
    }

    static getInstance() {
        if (this.#instance) {
            log.info("Instancia previa de la base de datos encontrada");
            return this.#instance;
        }
        this.#instance = new BaseDatos();
        log.info("Nueva instancia de la base de datos creada");
        return this.#instance;
    }

    static cerrarConexion() {
        if (this.#instance) {
            mongoose.disconnect();
            log.info("Conexión a MongoDB cerrada");
        }
    }
}

module.exports = BaseDatos.getInstance();
