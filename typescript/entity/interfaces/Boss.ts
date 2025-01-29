import { difficulty } from "../../types/difficulty";
import { Player } from "./Player";

export interface Boss {
  life: number;
  power: number;
  difficulty: difficulty;

  walk: (x: number, y: number) => void;
  simpleAttack: (target: Player) => void;
  chargedAttack: (target: Player) => void;
  superAttack: (target: Player) => void;
  receiveDamage: (damage: number, from: Player) => void;
}
