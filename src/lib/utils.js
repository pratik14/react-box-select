export const toggleObject = (arrayOfObjects, selectorId, option) => {
  const objectFound = arrayOfObjects.filter(o => o[selectorId] === option[selectorId]);
  if (objectFound.length) {
    return arrayOfObjects.filter(o => o[selectorId] !== option[selectorId]);
  }
  return [...arrayOfObjects, option];
}

export const sortArray = (options, label) => {
  return(
    options.sort(function(a,b){
      if (a[label] < b[label]){
        return -1;
      }
      if (a[label] > b[label]){
        return 1;
      }
      return 0;
    })
  )
}
