import {getHeroeById, getHeroesByOwner} from "../../base-pruebas/08-imp-exp.js";

describe('Pruebas de 08-imo-exp', () => {
    test('getHeroeByID debe de retornar un heroe por ID',()=>{
        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroeByID debe de retornar undefined si no existe',()=>{
        const id = 100
        const hero = getHeroeById(id)

        expect(hero).toBeUndefined()
        expect(hero).toBeFalsy()
    })

    test('getHeroeByOwner debe de retornar un arreglo con los heroes de DC',()=>{
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        const heroesTest = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];
        expect(heroes).toHaveLength(3);
        expect(heroes).toEqual(heroesTest)
        //forma real de hacerlo, compararlo con una data de prueba, ya que la data puede cambiar
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
    test('getHeroeByOwner debe de retornar un arreglo con los heroes de Marvel',()=>{
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        expect(heroes).toHaveLength(2)
        //forma real de hacerlo, compararlo con una data de prueba, ya que la data puede cambiar
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    })
});