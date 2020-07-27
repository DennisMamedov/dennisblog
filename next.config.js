const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'components',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
})({pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx']})
