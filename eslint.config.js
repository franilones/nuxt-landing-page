import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
    features: {
        stylistic: true,
        tooling: true,
        formatters: true,
    },
    dirs: {
        src: ['src', 'components', 'pages', 'store', 'test'],
    },
    languageOptions: {
        parser: 'vue-eslint-parser',
        parserOptions: {
            parser: '@typescript-eslint/parser',
            ecmaVersion: 2020,
            sourceType: 'module',
        },
    },
})
    .append(
        {
            ignores: ['.nuxt/**/*', 'node_modules/**/*', 'dist/**/**', '*.config.*'],
        },
        {
            files: ['src/**/*.vue', 'src/**/*.ts'],
            rules: {
                'indent': ['error', 4],
                'vue/html-indent': ['error', 4],
                'prettier/prettier': ['error', { tabWidth: 4 }],
                'space-before-function-paren': ['error', 'always'],
                'func-call-spacing': ['error', 'never'],
                'vue/first-attribute-linebreak': ['error', { singleline: 'ignore', multiline: 'below' }],
                'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
                'vue/no-v-html': 'error', // Sólo si no necesitas usar v-html
            },
        },
    )