const sum = require('./sum')

describe ('Testa se a function sum retorna os valores esperados ', () => {
    it('Testa se a soma de 4 e 5 e igual a 9. ', () => {
        expect(sum(4,5)).toBe(9);
    });

    it('Testa se a soma de 0 e 0 e igual a 0. ', () => {
        expect(sum(0,0)).toBe(0);
    });

    it('Testa se a função sum lança um erro quando os parâmetros são strings.', () => {
        expect(() => {sum('4','5')}).toThrow();
    });

    it('Testa se a função sum lança um erro quando os parâmetros são strings.', () => {
        expect(() => {sum(4,'5')}).toThrowError(new Error('parameters must be numbers'));
    });
});