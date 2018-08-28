import { isComment } from './utils.js';
import { getCommentContent } from './utils.js';

function babelPlugin() {
	return {
		visitor: {
			Program: function Program( path, { opts } ) {
				const { banner } = opts;

				if ( typeof banner !== 'string' || !isComment( banner ) ) {
					throw new TypeError( 'Banner must be a valid comment.' );
				}

				path.addComment( 'leading', getCommentContent( banner ) );
			}
		}
	};
}

export default babelPlugin;
export { isComment };
export { getCommentContent };
