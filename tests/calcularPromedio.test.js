// tests/calcularPromedio.test.js

const { calcularPromedioDefecto, calcularPromedioCorregido } = require('../src/calcularPromedio');

test('Promedio de números con defecto', () => {
    expect(calcularPromedioDefecto([10, 20, 30, 40, 50])).toBe(30);
    expect(() => calcularPromedioDefecto([])).toThrow(); // Debería fallar
});

test('Promedio de números corregido', () => {
    expect(calcularPromedioCorregido([10, 20, 30, 40, 50])).toBe(30);
    expect(calcularPromedioCorregido([])).toBe(0); // Corrección: debería devolver 0
});

//correccion
const { calcularPromedioDefecto, calcularPromedioCorregido } = require('../src/calcularPromedio');

test('Promedio de números con defecto', () => {
    expect(calcularPromedioDefecto([10, 20, 30, 40, 50])).toBe(30);
    // Aseguramos que se lance un error si la lista está vacía
    expect(() => calcularPromedioDefecto([])).toThrow(Error); // Lanzará una excepción
});

test('Promedio de números corregido', () => {
    expect(calcularPromedioCorregido([10, 20, 30, 40, 50])).toBe(30);
    // Cuando el array está vacío, debería devolver 0
    expect(calcularPromedioCorregido([])).toBe(0);
});
