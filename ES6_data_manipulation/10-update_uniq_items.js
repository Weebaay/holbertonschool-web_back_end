// 10-update_uniq_items
function updateUniqueItems(map) {
  // Vérifier si l'argument est une Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Parcourir la Map et mettre à jour les valeurs
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}

export default updateUniqueItems;
