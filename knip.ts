import type { KnipConfig } from 'knip'


export default <KnipConfig>{
  rules: {
    files: 'error',
    dependencies: 'error',
    devDependencies: 'error',
    unlisted: 'error',
    binaries: 'error',
    unresolved: 'error',
    exports: 'error',
    nsExports: 'error',
    types: 'error',
    nsTypes: 'error',
    enumMembers: 'error',
    classMembers: 'error',
    duplicates: 'error'
  },
  entry: [ 'astro.config.mjs', 'src/pages/**', 'build.ts', 'src/worker/index.ts' ],
  ignore: [ '**.d.ts' ],
  compilers: {
    astro: (text: string) => [...text.matchAll(/import[^;]+/g)].join('\n')
  }
}
