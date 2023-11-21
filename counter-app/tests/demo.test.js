

describe('Pruebas en <DemoComponent/>', () => { 
    test('esta prueba no debe fallar', () => {
        //inicializacion
        const suma = 2 + 3;
        //estimulo
        const suma2 = 5;
        //verificacion de resultados
        expect(suma).toBe(suma2)
    })
})
