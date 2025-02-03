import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistics: {
    indent: 2,
    quotes: 'single',
    semi: false,
    override: {
      'style/comma-dangle': 'error',
      'style/max-statements-per-line': 'off',
    },
  },
})
