'use strict';

function max(list) {
  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1];
  }
  let sub_max = max(list.slice(1));
  return list[0] > sub_max ? list[0] : sub_max;
}

console.log(max([1, 5, 10, 25, 16, 1])); // 25
