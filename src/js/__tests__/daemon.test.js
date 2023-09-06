import Daemon from '../daemon';

test('create Daemon', () => {
  const result = new Daemon('Amy');
  expect(result).toEqual({
    name: 'Amy',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
