module.exports = {
    extends: ['eslint-config-alloy/react', 'eslint:recommended', 'plugin:prettier/recommended'],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // React: false,
        // ReactDOM: false
    },
    rules: {
        'no-debugger': 0,
        'no-console': 0,
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        indent: [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // // @fixable jsx 的 children 缩进必须为两个空格
        'react/jsx-indent': ['error', 2],
        // // @fixable jsx 的 props 缩进必须为两个空格
        'react/jsx-indent-props': ['error', 2]
    }
}
