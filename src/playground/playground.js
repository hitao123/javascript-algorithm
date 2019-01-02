
function longgestCommonSubsequnce(str1, str2) {
  const s1 = [...str1]; // coloum
  const s2 = [...str2]; // row

  const matric = Array(s2.length + 1).fill(null).map(() => Array(s1.length + 1).fill(null));

  // 第一行 0
  for (let coloumIndex = 0; coloumIndex <= s1.length; coloumIndex += 1) {
    matric[0][coloumIndex] = 0;
  }

  // 第一列 0
  for (let rowIndex = 0; rowIndex <= s2.length; rowIndex += 1) {
    matric[rowIndex][0] = 0;
  }


  for (let rowIndex = 1; rowIndex <= s2.length; rowIndex += 1) {
    for (let coloumIndex = 1; coloumIndex <= s1.length; coloumIndex += 1) {
      if (s2[rowIndex - 1] === s1[coloumIndex - 1]) {
        matric[rowIndex][coloumIndex] = matric[rowIndex - 1][coloumIndex - 1] + 1;
      } else {
        matric[rowIndex][coloumIndex] = Math.max(
          matric[rowIndex - 1][coloumIndex],
          matric[rowIndex][coloumIndex - 1],
        );
      }
    }
  }


  if (matric[s2.length][s1.length] === 0) {
    return '';
  }


  const longStr = [];
  let row = s2.length;
  let coloum = s1.length;

  while (row > 0 || coloum > 0) {
    if (s2[row - 1] === s1[coloum - 1]) {
      longStr.unshift(s2[row - 1]);
      row -= 1;
      coloum -= 1;
    } else if (matric[row][coloum] === matric[row][coloum - 1]) {
      coloum -= 1;
    } else {
      row -= 1;
    }
  }

  return longStr.join('');
}


longgestCommonSubsequnce('abdfi', 'adi');

// console.log(st);
