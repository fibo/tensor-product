/* eslint-disable camelcase, indent */

var tensorProduct = require('tensor-product')
var test = require('tape')

function multiplication (a, b) { return a * b }

var product = tensorProduct.bind(null, multiplication)

test('scalar x scalar', function (t) {
  t.plan(1)

  var product_1x1 = product.bind(null, [1], [1])

  t.deepEqual(product_1x1([2], [3]), [6])
})

test('scalar x vector', function (t) {
  t.plan(1)

  var product_1x2 = product.bind(null, [1], [2])

  t.deepEqual(product_1x2([-1], [1, 2]), [-1, -2])
})

test('vector x vector', function (t) {
  t.plan(1)

  var product_2x2 = product.bind(null, [2], [2])

  t.deepEqual(product_2x2([1, 2], [3, 4]),
    [3, 4,
     6, 8])
})

test('matrix x scalar', function (t) {
  t.plan(1)

  var product_2_2x1 = product.bind(null, [2, 2], [1])

  t.deepEqual(product_2_2x1([1, 2,
                             3, 4], [2]), [2, 4,
                                           6, 8])
})

test('scalar x matrix', function (t) {
  t.plan(1)

  var product_1x2_2 = product.bind(null, [1], [2, 2])

  t.deepEqual(product_1x2_2([2], [1, 2,
                                  3, 4]), [2, 4,
                                           6, 8])
})

test('matrix x matrix', function (t) {
  t.plan(1)

  var product_2_2x2_2 = product.bind(null, [2, 2], [2, 2])

  t.deepEqual(product_2_2x2_2([2, 3,
                               4, 5], [1, 2,
                                       3, 4]), [2, 4,
                                                6, 8, 3, 6,
                                                      9, 12, 4, 8,
                                                             12, 16, 5, 10,
                                                                     15, 20])
})
