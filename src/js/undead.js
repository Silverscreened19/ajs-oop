import Character from './characters';

export default class Undead extends Character {
  constructor(name, type) {
    super(name, type = 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
