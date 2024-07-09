import * as crypto from "crypto";

/**
 * Encripta un input usando SHA-256
 * @param input String a encriptar
 * @returns {string}
 */
export const encriptar = (input: string) => {
    return crypto.createHash('sha256').update(input).digest('base64');
}

/**
 * Encripta un input usando SHA-256 y luego lo comprara con un string encriptado previamente
 * @param input Input a encriptar
 * @param comparacionEncriptado Input encriptado previamente a comparar
 * @returns {boolean}
 */
export const encriptarComparar = (input: string, comparacionEncriptado: string) => {
    const inputEncriptado = crypto.createHash('sha256').update(input).digest('base64');
    
    return inputEncriptado === comparacionEncriptado;
}