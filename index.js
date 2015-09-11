
var multiDimArrayIndex = require('multidim-array-index')

/**
 * Compute all combinations of indices
 *
 * [2, 3] => [
 *             [0, 0],
 *             [1, 0],
 *             [0, 1],
 *             [1, 1],
 *             [0, 2],
 *             [1, 2]
 *           ]
 */

function allIndices (dimensions) {
  var indices = [[]]

  for (var i in dimensions) {
    for (var j in dimensions[i])
      // TODO this is tricky :P
  }

  return indices
}

/**
 * Compute product of tensors
 *
 *
 * @param {Function} multiplication
 * @param {Array} rightData
 * @param {Array} rightDim
 * @param {Array} leftData
 * @param {Array} leftDim
 *
 * @returns {Array} tensorData
 */

function tensorProduct (multiplication, rightData, rightDim, leftData, leftDim) {
  var tensorData = []

  var leftIndex  = multiDimArrayIndex.bind(null, leftDim),
      rightIndex = multiDimArrayIndex.bind(null, rightDim)

  return tensorData
}

module.exports = tensorProduct

