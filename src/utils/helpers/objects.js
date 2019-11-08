export const deleteElementByIndex = (items, index) => {
  const newArray = [...items];
  newArray.splice(index, 1);
  return newArray;
}

export const hasObject = (items, obj) =>
  items.indexOf(obj) >= 0;

