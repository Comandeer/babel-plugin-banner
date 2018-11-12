/*! @comandeer/babel-plugin-banner v4.1.0 | (c) 2018 Comandeer | MIT license (see LICENSE) */
const oneLineRegex=/^\/\/(.*?)\n?$/,multiLineRegex=/^\/\*([\s\S]*?)\*\/\n?$/;function isComment(a){return!!(oneLineRegex.test(a)||multiLineRegex.test(a))}function getCommentContent(a){return oneLineRegex.test(a)?a.replace(/^\/\//,""):a.replace(/^\/\*/,"").replace(/\*\/\n?$/,"")}function babelPlugin(){return{visitor:{Program:function(a,{opts:b}){const c=b.banner;if("string"!=typeof c||!isComment(c))throw new TypeError("Banner must be a valid comment.");a.addComment("leading",getCommentContent(c))}}}}export default babelPlugin;export{isComment,getCommentContent};
//# sourceMappingURL=babel-plugin-banner.es2015.js.map
