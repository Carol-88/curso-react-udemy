import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09', () => { 
    test('getHeroeByIdAsync debe retornar un heroe', (done) => { 

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toEqual(  { 
                    id: 1, 
                    name: 'Batman', 
                    owner: 'DC' 
                })  

                done()  //esta funcion permite evaluar funciones asincronas
        })
     })

     test('getHeroeByIdAsync debe retornar un error', (done) => { 

        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {
               expect(error).toBe(`No existe el heroe con id ${id}`)
               done()  //esta funcion permite evaluar funciones asincronas
            })      
    })
})