const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'entry',
      targets: {
        ie: '11',
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
      },
      corejs: { version: 3, proposals: true },
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true
          }
        ]
      ]
    }
  ]
];
module.exports = { presets };
