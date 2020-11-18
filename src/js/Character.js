export default class Character {
  constructor(name) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) throw new Error('Некорректное имя');
    this.name = name;
    this.type = 'Character';
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }
}
