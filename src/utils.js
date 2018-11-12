const oneLineRegex = /^\/\/(.*?)\n?$/;
const multiLineRegex = /^\/\*([\s\S]*?)\*\/\n?$/;

function isComment( input ) {
	if ( oneLineRegex.test( input ) || multiLineRegex.test( input ) ) {
		return true;
	}

	return false;
}

function getCommentContent( input ) {
	if ( oneLineRegex.test( input ) ) {
		return input.replace( /^\/\//, '' );
	}

	return input.replace( /^\/\*/, '' ).replace( /\*\/\n?$/, '' );
}

export { isComment };
export { getCommentContent };
