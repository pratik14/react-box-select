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
