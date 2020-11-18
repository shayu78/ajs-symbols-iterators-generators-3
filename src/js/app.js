/* eslint-disable no-console */

import Swordsman from './Swordsman';
import Team from './Team';

function canIterate(dataType) {
  if (dataType === null || dataType === undefined) return false;
  return typeof dataType[Symbol.iterator] === 'function';
}

try {
  const team = new Team();
  const swordsman = new Swordsman('swordsman');
  team.add(swordsman);
  const swordsman2 = new Swordsman('swordsman2');
  const swordsman3 = new Swordsman('swordsman3');
  team.addAll(swordsman2, swordsman3, swordsman);

  console.log(canIterate(new Map()));
  console.log(canIterate(new Set()));
  console.log(canIterate(null));
  console.log(canIterate(undefined));
  console.log(canIterate(10));
  console.log(canIterate('Netology'));
  console.log(canIterate([]));
  console.log(canIterate(true));
  console.log(canIterate(Symbol));
  console.log(canIterate(team));
} catch (error) {
  console.error(error.message);
}
