import Magician from '../magician';

test('create Magician', () => {
  const result = new Magician('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
