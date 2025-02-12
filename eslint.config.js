import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  ignores: ['playwright-report/*'],
  stylistics: {
    indent: 2,
    quotes: 'single',
    semi: false,
    override: {
      'style/comma-dangle': 'error',
      'style/max-statements-per-line': 'off',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: {
            max: 1,
            allowFirstLine: false,
          },
        },
      ],
    },
  },
})
