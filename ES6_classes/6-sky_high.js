// 6-sky_high
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Appel du constructeur parent
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }

  get floors() {
    return this._floors;
  }
}
