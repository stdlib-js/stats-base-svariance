/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var svariancepn = require( '@stdlib/stats-strided-svariancepn' ).ndarray;


// MAIN //

/**
* Computes the variance of a single-precision floating-point strided array.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} correction - degrees of freedom adjustment
* @param {Float32Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} variance
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var floor = require( '@stdlib/math-base-special-floor' );
*
* var x = new Float32Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
* var N = floor( x.length / 2 );
*
* var v = svariance( N, 1, x, 2, 1 );
* // returns 6.25
*/
function svariance( N, correction, x, stride, offset ) {
	return svariancepn( N, correction, x, stride, offset );
}


// EXPORTS //

module.exports = svariance;
