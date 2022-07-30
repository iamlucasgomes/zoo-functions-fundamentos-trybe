const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('a função deve retornar undefined caso não seja definido um parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('retorna um erro, caso o parametro não seja uma string', () => {
    expect(handlerElephants(!String)).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('caso o parametro seja uma string inválida, retorne null', () => {
    expect(handlerElephants('teste')).toBeNull();
  });
  it('retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toMatch(/NW/);
  });
  it('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
