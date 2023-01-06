import { relative } from 'node:path'

const mapFilenames = (files, separator) => files.map((f) => relative(process.cwd(), f)).join(separator)
const buildEslintCommand = (files) => `eslint --fix ${mapFilenames(files, ' ')}`

export default {
  '*': 'prettier --write --ignore-unknown',
  '*.{ts, tsx}': [buildEslintCommand]
}
