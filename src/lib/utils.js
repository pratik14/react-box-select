/* eslint-disable import/prefer-default-export */
export const sortArray = (options, label) => options.sort((a, b) => {
  if (a[label] < b[label]) {
    return -1;
  }
  if (a[label] > b[label]) {
    return 1;
  }
  return 0;
});
