// 5-typed_arrays

function createInt8TypedArray(length, position, value) {
  // Créer un ArrayBuffer de la longueur spécifiée
  const buffer = new ArrayBuffer(length);

  // Créer un DataView pour manipuler l'ArrayBuffer
  const view = new DataView(buffer);

  // Vérifier si la position est valide
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Insérer la valeur à la position spécifiée
  view.setInt8(position, value);

  return view;
}

export default createInt8TypedArray;
