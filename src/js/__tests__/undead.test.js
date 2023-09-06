import Undead from '../undead';

test('create Undead', () => {
  const result = new Undead('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
