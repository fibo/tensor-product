var tensorProduct = require('./index')
var test = require('tape')

function multiplication (a, b) { return a * b }

var product = tensorProduct.bind(null, multiplication)

test('[1] x [1]', function (t) {
  t.plan(1)

  var product_1x1 = product.bind(null, [1], [1])

  t.deepEqual(product_1x1([2], [3]), [6])
})

test('[1] x [2]', function (t) {
  t.plan(1)

  var product_1x2 = product.bind(null, [1], [2])

  t.deepEqual(product_1x2([-1], [1, 2]), [-1, -2])
})

test('[2] x [2]', function (t) {
  t.plan(1)

  var product_2x2 = product.bind(null, [2], [2])

  t.deepEqual(product_2x2([1, 2], [3, 4]),
    [3, 4,
     6, 8])
})

test('[2, 2] x [1]', function (t) {
  t.plan(1)

  var product_2_2x1 = product.bind(null, [2, 2], [1])

  t.deepEqual(product_2_2x1(
    [1, 2,
     3, 4],
    [2]),
    [2, 4,
     6, 8])
})

test('[1] x [2, 2]', function (t) {
  t.plan(1)

  var product_1x2_2 = product.bind(null, [1], [2, 2])

  t.deepEqual(product_1x2_2([2],
    [1, 2,
     3, 4]),
    [2, 4,
     6, 8])
})
