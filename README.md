# tensor-product

> computes the [product of tensors][1]

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Usage

Signature is `(multiplication, leftDim, rightDim, leftData, rightData)` where
* **multiplication** is a function that defines the scalar operator used
* **leftDim** and **rightDim** are arrays that define the tensor indices set
* **leftData** and **rightData** are arrays that define the tensor data set

This functions returns the **tensorData** array.

All code in the examples below is intended to be contained into a [single file](https://github.com/fibo/tensor-product/blob/master/test.js).

Let's use common real multiplication.

```
var tensorProduct = require('tensor-product')

function multiplication (a, b) { return a * b }
```

### [1] x [1]

A tensor with one index that has a unique value is like a scalar.
This case degenerate to scalar multiplication.

```
var product_1x1 = product.bind(null, [1], [1])

product_1x1([2], [3]) // [6]
```

### [1] x [2]

A tensor with one index which range is greater than one is like a vector.
This case is like vector multiplication by a scalar.

```
var product_1x2 = product.bind(null, [1], [2])

product_1x2([-1], [1, 2]) // [-1, -2]
```

### [2] x [2]

The tensor product of two vectors is a matrix.

```
var product_2x2 = product.bind(null, [2], [2])

product_2x2([1, 2], [3, 4]) // [3, 4,
                            //  6, 8]
```

### [2, 2] x [1]

A tensor with two indices is like a matrix.
This case is like matrix multiplication by a scalar.

```
var product_2_2x1 = product.bind(null, [2, 2], [1])

product_2_2x1( [1, 2,       // [2, 4,
                3, 4], [2]) //  6, 8]
```

### [1] x [2, 2]

Similar to example above, but commuted.

```
var product_1x2_2 = product.bind(null, [1], [2, 2])

product_1x2_2([2], [1, 2,  // [2, 4,
                    3, 4]) //  6, 8]
```

### [2, 2] x [2, 2]

A product tensor of two matrices is a tensor with four indices.

```
var product_2_2x2_2 = product.bind(null, [2, 2], [2, 2])

product_2_2x2_2([2, 2,
                 2, 2], [1, 2,
                         3, 4]) // [2, 2,
                                //  2, 2, 4, 4,
                                //        4, 4, 6, 6,
                                //              6, 6, 8, 8,
                                //                    8, 8]
```

  [1]: (https://en.wikipedia.org/wiki/Tensor_product#Product_of_tensors) "Product of tensors"
