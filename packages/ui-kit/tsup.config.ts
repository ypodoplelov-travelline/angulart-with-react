import svgrPlugin from 'esbuild-plugin-svgr'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: false,
  external: ['react'],
  sourcemap: true,
  clean: false,
  treeshake: true,
  esbuildPlugins: [svgrPlugin({ template })],
})

function template(variables: any, { tpl }: any) {
  return tpl`
      ${variables.imports};
      ${variables.interfaces};
      function ${variables.componentName} (${variables.props}) {
        return ${variables.jsx}
      };
      ${variables.exports};
      export const ReactComponent = ${variables.componentName};
    `
}
