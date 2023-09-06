import Character from '../characters';
import Magician from '../magician';

test('create character', () => {
  const result = new Character('Ally', 'Magician');
  expect(result).toEqual({
    name: 'Ally',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('name too short', () => {
  expect(() => new Character('A', 'Daemon')).toThrow('Invalid name length');
});

test('name too long', () => {
  expect(() => new Character('Aegfgweiusdvdfhe', 'Daemon')).toThrow('Invalid name length');
});

test('ivalid character type', () => {
  expect(() => new Character('Ally', 'Dark elf')).toThrow('Invalid character type');
});

test('Magician level up function', () => {
  const result = new Magician('Ally');
  result.levelUp();
  expect(result).toEqual({
    name: 'Ally',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('Magician level up function on dead character', () => {
  const result = new Magician('Ally');
  result.health = 0;
  expect(() => {
    result.levelUp();
  }).toThrow('This character is dead');
});

test('damage function on Magician', () => {
  const result = new Magician('Ally');
  result.damage(20);
  expect(result).toEqual({
    name: 'Ally',
    type: 'Magician',
    health: 88,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('damage function on dead Magician', () => {
  const result = new Magician('Ally');
  result.health = 0;
  result.damage(20);
  expect(result.health).toEqual(0);
});
