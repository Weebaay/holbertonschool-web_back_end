// 7-has_array_values
function hasValuesFromArray(set, array) {
  // Vérifier si tous les éléments du tableau existent dans le Set
  return array.every((value) => set.has(value));
}

export default hasValuesFromArray;
