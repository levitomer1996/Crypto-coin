export default (str, arr) => {
  var list = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      list = [...list, arr[i]];
    }
  }
  return list;
};
