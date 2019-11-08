export const deleteElementByIndex = (items, index) => {
  const newArray = [...items];
  newArray.splice(index, 1);
  return newArray;
}