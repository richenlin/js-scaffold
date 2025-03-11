// babel.config.cjs
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        modules: 'commonjs', // 强制转换为 CJS
      },
    ],
  ],
};
