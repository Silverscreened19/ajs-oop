import Character from './characters';

export default class Magician extends Character {
  constructor(name, type) {
    super(name, type = 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
