import chai from 'chai';
import { isComment } from '../src/utils.js';
import { getCommentContent } from '../src/utils.js';

const expect = chai.expect;

function testInput( input, fn, expected ) {
	if ( !Array.isArray( input ) ) {
		input = [ input ];
	}

	for ( const value of input ) {
		expect( fn( value ), value ).to.equal( expected );
	}
}

function testInputOutput( map, fn ) {
	Object.keys( map ).forEach( ( key ) => {
		const expected = map[ key ];

		expect( fn( key ), key ).to.equal( expected );
	} );
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
			'/*T\ne\ns\nt */\n',
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

describe( 'getCommentContent', () => {
	it( 'is a function', () => {
		expect( getCommentContent ).to.be.a( 'function' );
	} );

	it( 'correctly gets content from given comment', () => {
		const comments = {
			'/*test*/': 'test',
			'/*! Test */': '! Test ',
			'/**/': '',
			'/*\n*/': '\n',
			'/*T\ne\ns\nt */': 'T\ne\ns\nt ',
			'/*Test*/\n': 'Test',
			'//test': 'test',
			'//Test\n': 'Test\n',
			'// test': ' test',
			'// test\n': ' test\n',
			'//': '',
			'//\n': '\n'
		};

		testInputOutput( comments, getCommentContent );
	} );
} );
