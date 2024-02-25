
import { dataTypes, sequelize } from "../loadSequelize.js";

export const seq = sequelize;


export const Pokemon = sequelize.define('Pokemon', {
    nombre: dataTypes.STRING,
    caracter: dataTypes.STRING,
}, { tableName: 'pokemons', timestamps: false });
