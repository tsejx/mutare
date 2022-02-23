const config = {
  mode: 'site',
  title: 'Mutare',
  description: '函数工具库',
  base: '/mutare/',
  publicPath: '/mutare/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/data-structure-and-algorithms-favicon.svg',
  exportStatic: {},
  dynamicImport: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/tsejx/mutare',
    },
  ],
}

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {}
}

export default config
