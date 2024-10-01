/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var filledarrayBy = require( '@stdlib/array-filled-by' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils-nary-function' );
var abs2 = require( '@stdlib/math-base-special-abs2' );
var map2d = require( './../lib' );

function fill( i ) {
	var rand = discreteUniform( -10*(i+1), 10*(i+1) );
	return filledarrayBy( 10, 'float64', rand );
}

// Create a nested array of arrays:
var x = filledarrayBy( 10, 'generic', fill );

// Create an explicit unary function:
var f = naryFunction( abs2, 1 );

// Compute the element-wise squared absolute value...
var y = map2d( x, f );

console.log( 'x:' );
console.log( x );

console.log( 'y:' );
console.log( y );
