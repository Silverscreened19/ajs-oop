import Character from './characters';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type = 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
