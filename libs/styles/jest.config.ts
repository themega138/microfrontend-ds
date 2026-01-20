export default {
  displayName: 'styles',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  coverageDirectory: '../../coverage/libs/styles',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  moduleFileExtensions: ['ts', 'js', 'html']
};
