import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _intance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage._intance += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage._intance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
