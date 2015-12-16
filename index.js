// var multiDimArrayIndex = require('multidim-array-index')

/**
 * Computes product of tensors
 *
 *
 * @param {Function} multiplication
 * @param {Array} leftDim
 * @param {Array} rightDim
 * @param {Array} rightData
 * @param {Array} leftData
 *
 * @returns {Array} tensorData
 */

function tensorProduct (multiplication, rightDim, leftDim, rightData, leftData) {
  var tensorData = []

  if (rightDim[0] === 1 && leftDim[0] === 1) {
    tensorData.push(multiplication(leftData[0], rightData[0]))
  }

  return tensorData
}

module.exports = tensorProduct
