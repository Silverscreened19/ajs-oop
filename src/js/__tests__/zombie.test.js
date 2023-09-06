import Zombie from '../zombie';

test('create Zombie', () => {
  const result = new Zombie('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
