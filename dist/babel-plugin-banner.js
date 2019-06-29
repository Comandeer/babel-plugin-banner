/*! @comandeer/babel-plugin-banner v5.0.0 | (c) 2019 Comandeer | MIT license (see LICENSE) */
'use strict';Object.defineProperty(exports,"__esModule",{value:!0});const oneLineRegex=/^\/\/(.*?)\n?$/,multiLineRegex=/^\/\*([\s\S]*?)\*\/\n?$/;function isComment(a){return!!(oneLineRegex.test(a)||multiLineRegex.test(a))}function getCommentContent(a){return oneLineRegex.test(a)?a.replace(/^\/\//,""):a.replace(/^\/\*/,"").replace(/\*\/\n?$/,"")}function babelPlugin(){return{visitor:{Program:function(a,{opts:b}){const c=b.banner;if("string"!=typeof c||!isComment(c))throw new TypeError("Banner must be a valid comment.");a.addComment("leading",getCommentContent(c))}}}}exports.default=babelPlugin,exports.isComment=isComment,exports.getCommentContent=getCommentContent;
//# sourceMappingURL=babel-plugin-banner.js.map
