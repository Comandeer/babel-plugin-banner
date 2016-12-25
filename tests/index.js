'use strict';

const readFileSync = require( 'fs' ).readFileSync;
const chai = require( 'chai' );
const expect = chai.expect;
const plugin = require( '../index' );
const babel = require( 'babel-core' );

process.chdir( 'tests' );

const source = readFileSync( 'fixtures/index.js', 'utf8' );

describe( 'babel-plugin-banner', () => {
	it( 'requires banner to be a string', () => {
		const banners = [
			null,
			undefined,
			1,
			{},
			[]
		];

		for ( const banner of banners ) {
			const fn = () => {
				babel.transform( source, {
					plugins: [
						[ plugin, {
							banner
						} ]
					]
				} );
			};

			expect( fn ).to.throw( TypeError, 'Banner must be a string.' );
		}

		const fn = () => {
			babel.transform( source, {
				plugins: [
					[ plugin, {
						banner: ''
					} ]
				]
			} );
		};

		expect( fn ).not.to.throw( TypeError, 'Banner must be a string.' );

	} );

	it( 'adds banner to the beginning of the code', () => {
		const expected = readFileSync( 'fixtures/index.expected.js', 'utf8' ).trim();

		const result = babel.transform( source, {
			plugins: [
				[ plugin, {
					banner: '/* hubla bubla */'
				} ]
			]
		} );

		expect( result.code ).to.equal( expected );
	} );

	it( 'does not add newline if proper option is set to false', () => {
		const expected = readFileSync( 'fixtures/index-no-newline.expected.js', 'utf8' ).trim();

		const result = babel.transform( source, {
			plugins: [
				[ plugin, {
					banner: '/* hubla bubla */',
					newLine: false
				} ]
			]
		} );

		expect( result.code ).to.equal( expected );
	} );
} );
