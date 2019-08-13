module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/components/Breadcrumb.spec.js', '**/tests/unit/store/modal.spec.js'],
  coverageReporters: ['json'],
  coverageDirectory: '.nyc_output',
  collectCoverageFrom: [
    'src/components/breadcrumb/Breadcrumb.vue',
    'src/store/modules/modal.js'
  ]
}
