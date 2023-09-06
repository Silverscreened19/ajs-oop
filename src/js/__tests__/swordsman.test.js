import Swordsman from '../swordsman';

test('create Swordsman', () => {
  const result = new Swordsman('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
