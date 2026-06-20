/** @license Apache-2.0 */

'use strict';

/**
* WebAssembly routine to calculate the L2-norm of a single-precision floating-point vector.
*
* @module @stdlib/blas-base-wasm-snrm2
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var snrm2 = require( '@stdlib/blas-base-wasm-snrm2' );
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* // Perform operation:
* var out = snrm2.main( x.length, x, 1 );
* // returns ~7.42
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var snrm2 = require( '@stdlib/blas-base-wasm-snrm2' );
*
* // Define a strided array:
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
*
* // Perform operation:
* var out = snrm2.ndarray( x.length, x, 1, 0 );
* // returns ~7.42
*
* @example
* var Memory = require( '@stdlib/wasm-memory' );
* var oneTo = require( '@stdlib/array-one-to' );
* var snrm2 = require( '@stdlib/blas-base-wasm-snrm2' );
*
* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
* var mem = new Memory({
*     'initial': 10,
*     'maximum': 100
* });
*
* // Create a BLAS routine:
* var mod = new snrm2.Module( mem );
* // returns <Module>
*
* // Initialize the routine:
* mod.initializeSync();
*
* // Define a vector data type:
* var dtype = 'float32';
*
* // Specify a vector length:
* var N = 5;
*
* // Define a pointer (i.e., byte offset) for storing the input vector:
* var xptr = 0;
*
* // Write vector values to module memory:
* mod.write( xptr, oneTo( N, dtype ) );
*
* // Perform computation:
* var out = mod.main( N, xptr, 1 );
* // returns ~7.42
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

// exports: { "Module": "main.Module" }
