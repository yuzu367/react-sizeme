import { terser } from '@rollup/plugin-terser'
const packageJson = require('./package.json')

const baseConfig = require('./rollup.config.js')

baseConfig.plugins.push(terser())
baseConfig.output.file = `dist/${packageJson.name}.min.js`

module.exports = baseConfig
