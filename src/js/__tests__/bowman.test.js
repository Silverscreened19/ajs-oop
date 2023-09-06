import Bowman from '../bowman';

test('create Bowman', () => {
  const result = new Bowman('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
