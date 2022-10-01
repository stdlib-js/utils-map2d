/*
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

import map2d = require( './index' );

/**
* Callback function.
*
* @param v - argument
* @returns result
*/
function clbk( v: any ): any {
	return v;
}


// TESTS //

// The function returns an array of arrays...
{
	const arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];

	map2d( arr, clbk ); // $ExpectType any[][]
	map2d( arr, clbk, {} ); // $ExpectType any[][]
}

// The compiler throws an error if the function is provided a first argument other than an array of arrays...
{
	map2d( true, clbk ); // $ExpectError
	map2d( false, clbk ); // $ExpectError
	map2d( 5, clbk ); // $ExpectError
	map2d( {}, clbk ); // $ExpectError

	map2d( true, clbk, {} ); // $ExpectError
	map2d( false, clbk, {} ); // $ExpectError
	map2d( 5, clbk, {} ); // $ExpectError
	map2d( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument other than a function...
{
	const arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];

	map2d( arr, '5' ); // $ExpectError
	map2d( arr, true ); // $ExpectError
	map2d( arr, false ); // $ExpectError
	map2d( arr, 123 ); // $ExpectError
	map2d( arr, null ); // $ExpectError
	map2d( arr, {} ); // $ExpectError
	map2d( arr, [] ); // $ExpectError

	map2d( arr, '5', {} ); // $ExpectError
	map2d( arr, true, {} ); // $ExpectError
	map2d( arr, false, {} ); // $ExpectError
	map2d( arr, 123, {} ); // $ExpectError
	map2d( arr, null, {} ); // $ExpectError
	map2d( arr, {}, {} ); // $ExpectError
	map2d( arr, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const arr = [
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];

	map2d(); // $ExpectError
	map2d( arr ); // $ExpectError
	map2d( arr, clbk, {}, 4 ); // $ExpectError
}
