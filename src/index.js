import { isComment } from './utils.js';
import { getCommentContent } from './utils.js';

function babelPlugin( { types } ) {
	const { noop } = types;

	return {
		visitor: {
			Program: function Program( path, { opts } ) {
				const { banner, newLine = true } = opts;

				if ( typeof banner !== 'string' || !isComment( banner ) ) {
					throw new TypeError( 'Banner must be a valid comment.' );
				}

				if ( newLine ) {
					path.unshiftContainer( 'body', noop() );
				}

				path.addComment( 'leading', getCommentContent( banner ) );
			}
		}
	};
}

export default babelPlugin;
