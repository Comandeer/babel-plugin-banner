'use strict';

exports.isComment = function( input ) {
	const oneLineRegex = /^\/\/(.*?)\n?$/;
	const multiLineRegex = /^\/\*([\s\S]*?)\*\/$/;

	if ( oneLineRegex.test( input ) || multiLineRegex.test( input ) ) {
		return true;
	}

	return false;
};
