import {getImagen} from "../../base-pruebas/11-async-await.js";

describe('Prueba 11 async', ()=>{
    test('getImage debe devolver un url de la imagen',async ()=>{
        const url  =await getImagen()
        expect(typeof url).toBe('string')
    })

    test('getImagen devuelve error',async ()=>{
        const url  =await getImagen()
        expect(url).toBe('No se encontró la imagen')
    })
})