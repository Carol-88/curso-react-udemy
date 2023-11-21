import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 
        const testUser = {
            uid: 'ABC123',
            username:'Zeroxia'
        };

        const user = getUser();

        expect(testUser).toEqual(user)

         });
 });
 
    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Carol';

        const testUsuaurioActivo = {
            uid: 'ABC567',
            username: name,
        }
        const usuarioActivo = getUsuarioActivo(name);
        expect(usuarioActivo).toEqual(testUsuaurioActivo)
        //console.log(usuarioActivo)
    })