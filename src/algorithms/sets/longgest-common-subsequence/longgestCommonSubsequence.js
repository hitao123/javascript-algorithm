/**
 * 最大公共子序列
 * @param {[]} set1
 * @param {[]} set2
 */
export default function longgestCommonSubsequence(set1, set2) {
  const lcsMatrix = Array(set2.length + 1).fill(null).map(() => Array(set1.length + 1).fill(null));

  // 填充第一排为 0
  for (let coloumIndex = 0; coloumIndex <= set1.length; coloumIndex += 1) {
    lcsMatrix[0][coloumIndex] = 0;
  }
  // 填充第一列为 0
  for (let rowIndex = 0; rowIndex <= set2.length; rowIndex += 1) {
    lcsMatrix[rowIndex][0] = 0;
  }

  for (let rowIndex = 1; rowIndex <= set2.length; rowIndex += 1) {
    for (let coloumIndex = 1; coloumIndex <= set1.length; coloumIndex += 1) {
      if (set1[coloumIndex - 1] === set2[rowIndex - 1]) {
        lcsMatrix[rowIndex][coloumIndex] = lcsMatrix[rowIndex - 1][coloumIndex - 1] + 1;
      } else {
        lcsMatrix[rowIndex][coloumIndex] = Math.max(
          lcsMatrix[rowIndex - 1][coloumIndex],
          lcsMatrix[rowIndex][coloumIndex - 1],
        );
      }
    }
  }

  // 如果最后一位结果为 0 肯定就没有最长公共子序列了
  if (!lcsMatrix[set2.length][set1.length]) {
    return [''];
  }

  const longgestSequence = [];

  let columnIndex = set1.length;
  let rowIndex = set2.length;

  // 移动数组 获取最长公共子串
  while (columnIndex > 0 || rowIndex > 0) {
    // 向左上移动
    if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
      longgestSequence.unshift(set1[columnIndex - 1]);
      columnIndex -= 1;
      rowIndex -= 1;
    } else if (lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]) {
      columnIndex -= 1;
    } else {
      rowIndex -= 1;
    }
  }

  return longgestSequence;
}
