function test(desc, fn){
    try {
        fn();
        console.log('Correcto '+ desc);
    } catch (error) {
        console.error('Fallo ' + desc);
        console.error(" " + error.message);
    }
}

function assertEquals(actual, esperado){
    if(actual !== esperado){
        throw new Error (`Esperado: ${esperado} pero obtuvo: ${actual}`);
    }
}

//Suma

test("Suma 5.8 + 0.5 = 6.3", () => {
    assertEquals(suma(5.8,0.5),6.3);
})

test("Suma -2+(-2)=-4", () => {
    assertEquals(suma(-2,-2),-4);
})

test("Suma -5+3=-2", () => {
    assertEquals(suma(-5,3),-2);
})

//esPar

test("Par 2", () => {
    assertEquals(esPar(2),true);
})

test("impar 3", () => {
    assertEquals(esPar(3),false);
})

test("Par -2", () => {
    assertEquals(esPar(-2),true);
})

// dividir

test("Dividir -8/2=-4", () => {
    assertEquals(dividir(-8,2),-4);
})

test("Dividir 20.5/2=10.25", () => {
    assertEquals(dividir(20.5,2),10.25);
})

// obtener iniciales

// test("Erik Trujillo", () => {
//     assertEquals(obtenerIniciales('Erik Trujillo'),'E'+'T');
// })

// test("ErikTrujillo", () => {
//     assertEquals(obtenerIniciales('ErikTrujillo'),'E'+'T');
// })

// test("Erik Trujillo Juarez", () => {
//     assertEquals(obtenerIniciales('Erik Trujillo Juarez'),'E'+'T'+'J');
// })

// // Formatear fecha

// test("15 de Junio 2001", () => {
//     assertEquals(formatearFecha('15 de Junio 2001'),'Formato incorrecto');
// })

// test("15/06/1002", () => {
//     assertEquals(formatearFecha('15/06/1002'),'Formato incorrecto');
// })

// test("15-06-1002", () => {
//     assertEquals(formatearFecha('15-06-1002'),'Formato incorrecto');
// })

// test("2003-05-05", () => {
//     assertEquals(formatearFecha('2003-05-05'),'05/05/2003');
// })