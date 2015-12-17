# tensor-product

> computes the [product of tensors][1]

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Example

All code in the examples below is intended to be contained into a [single file](https://github.com/fibo/tensor-product/blob/master/test.js).

```
var tensorProduct = require('tensor-product')

function multiplication (a, b) { return a * b }

// [1] x [1]

var product_1x1 = product.bind(null, [1], [1])

product_1x1([2], [3]) // [6]

// [1] x [2]

var product_1x2 = product.bind(null, [1], [2])

product_1x2([-1], [1, 2]) // [-1, -2]

// [2] x [2]

var product_2x2 = product.bind(null, [2], [2])

product_2x2([1, 2], [3, 4]) // [3, 4,
                            //  6, 8]

// [2, 2] x [1]

var product_2_2x1 = product.bind(null, [2, 2], [1])

product_2_2x1( [1, 2,       // [2, 4,
                3, 4], [2]) //  6, 8]

// [1] x [2, 2]

var product_1x2_2 = product.bind(null, [1], [2, 2])

product_1x2_2([2], [1, 2,  // [2, 4,
                    3, 4]) //  6, 8]
```

  [1]: (https://en.wikipedia.org/wiki/Tensor_product#Product_of_tensors) "Product of tensors"
