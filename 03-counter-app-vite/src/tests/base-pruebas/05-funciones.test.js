import {getUser, getUsuarioActivo} from "../../base-pruebas/05-funciones.js";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(testUser).toEqual(user)
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Antony'
        const testUser = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name)

        expect(testUser).toEqual(user)
    })
})