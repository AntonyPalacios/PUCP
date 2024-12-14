import {getHeroeByIdAsync} from "../../base-pruebas/09-promesas.js";

describe('Prueba 09-promesas', () => {
    test('getHeroesByIDAsync debe retornar un heroe', (done) => {
        const id = 1
        getHeroeByIdAsync(id).then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done()
        })
    })
    test('getHeroesByIDAsync debe obtener error si heroe no existe', (done) => {
        const id = 100
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy();
                done()
            })
            .catch((err) => {
                expect(err).toBe(`No se pudo encontrar el héroe ${id}`)
                done()
            })
    })
})