var multiDimArrayIndex = require('multidim-array-index')

// TODO put it its own module, also algebra uses it.
function permutationsWithRepetitions (previousValue, currentValue, currentIndex, array) {
  var result = []

  if (array.length === 1) {
    for (var i = 0; i < currentValue; i++) {
      result.push([i])
    }
  } else {
    var arrayWithoutLastElement = []

    for (var j = 0; j < array.length - 1; j++) {
      arrayWithoutLastElement.push(array[j])
    }

    var previousIteration = arrayWithoutLastElement.reduce(permutationsWithRepetitions)

    for (var l = 0; l < previousIteration.length; l++) {
      for (var k = 0; k < currentValue; k++) {
        result.push(previousIteration[l].concat(k))
      }
    }
  }

  return result
}

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

function tensorProduct (multiplication, leftDim, rightDim, leftData, rightData) {
  var tensorData = []
  var tensorDim = leftDim.concat(rightDim)

  leftDim
    .reduce(permutationsWithRepetitions, [])
    .forEach(function (leftCombination) {
      var i = multiDimArrayIndex(leftDim, leftCombination)

      rightDim
        .reduce(permutationsWithRepetitions, [])
        .forEach(function (rightCombination) {
          var j = multiDimArrayIndex(rightDim, rightCombination)

          var indexCombination = leftCombination.concat(rightCombination)
          var k = multiDimArrayIndex(tensorDim, indexCombination)

          tensorData[k] = multiplication(leftData[i], rightData[j])
        })
    })

  return tensorData
}

module.exports = tensorProduct
