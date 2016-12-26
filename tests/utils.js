'use strict';

const chai = require( 'chai' );
const utils = require( '../utils' );
const expect = chai.expect;
const isComment = utils.isComment;

function testInput( input, fn, expected ) {
	if ( !Array.isArray( input ) ) {
		input = [ input ];
	}

	for ( const value of input ) {
		expect( fn( value ), value ).to.equal( expected );
	}
}

describe( 'isComment', () => {
	it( 'is a function', () => {
		expect( isComment ).to.be.a( 'function' );
	} );

	it( 'recognizes comments correctly', () => {
		const comments = [
			'/*test*/',
			'/*! Test */',
			'/**/',
			'/*\n*/',
			'/*T\ne\ns\nt */',
			'//test',
			'//Test\n',
			'// test',
			'// test\n',
			'//',
			'//\n'
		];

		const notComments = [
			'/* Test',
			'Test */',
			'// t\nest',
			'Te/*st',
			'Te/**/st'
		];

		testInput( comments, isComment, true );
		testInput( notComments, isComment, false );
	} );
} );
