import { Boss } from "../interfaces/Boss";

const Werewolf = (life, power, difficulty): Boss => {
  return {
    life,
    power,
    difficulty,
    walk: (x, y) => {
      console.log(`Walking to ${x},${y}`);
    },
    simpleAttack: (target) => {
      console.log(`Simple attack to ${target.name}`);
    },
    chargedAttack: (target) => {
      console.log(`Charged attack to ${target.name}`);
    },
    superAttack: (target) => {
      console.log(`Super attack to ${target.name}`);
    },
    receiveDamage: (damage, from) => {
      life -= damage;
      console.log(
        `Received ${damage} damage from ${from.name}, my actual life is ${life}`
      );
    },
  };
};

export default Werewolf;
