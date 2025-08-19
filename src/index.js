module.exports = function towelSort(matrix) {
  return !Array.isArray(matrix)
    ? []
    : matrix
        .map((val, i) =>
          i % 2 === 0 ? val.sort((a, b) => a - b) : val.sort((a, b) => b - a)
        )
        .flat();
};
