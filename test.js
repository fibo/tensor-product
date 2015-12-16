var tensorProduct = require('./index')
var test = require('tape')

function multiplication (a, b) { return a * b }

var product = tensorProduct.bind(null, multiplication)

test('[1] x [1]', function (t) {
  t.plan(1)

  var product_1x1 = product.bind(null, [1], [1])

  t.deepEqual(product_1x1([2], [3]), [6])
})
